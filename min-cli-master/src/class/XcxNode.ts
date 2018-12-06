import { Request, WxFile } from '../class'
import { log, xcxNodeCache, xcxNext } from '../util'

export namespace XcxNode {
  export interface Options extends Request.Options {
    /**
     * 强制创建，不管在不在缓存区里，都要创建一个xcxNode
     *
     * @type {boolean}
     * @memberof Options
     */
    isForce?: boolean,

    /**
     * 父节点
     *
     * @type {XcxNode}
     * @memberof Options
     */
    root?: XcxNode
  }
}

/**
 * 小程序节点类，用于创建生成节点树
 *
 * @export
 * @class XcxNode
 */
export class XcxNode {

  /**
   * 请求地址
   *
   * @type {Request}
   * @memberof XcxNode
   */
  request: Request

  /**
   * 子节点列表
   *
   * @type {XcxNode[]}
   * @memberof XcxNode
   */
  children: XcxNode[] = []

  /**
   * 文件处理器
   *
   * @type {WxFile}
   * @memberof XcxNode
   */
  wxFile: WxFile

  /**
   * 可用的请求列表
   *
   * @type {Request.Core[]}
   * @memberof XcxNode
   */
  useRequests: Request.Core[] = []

  /**
   * 缺失的请求列表
   *
   * @type {Request.Default[]}
   * @memberof XcxNode
   */
  lackRequests: Request.Default[] = []

  /**
   * Creates an instance of XcxNode.
   * @param {Request} request
   * @param {XcxNode} [root]
   * @memberof XcxNode
   */
  constructor (request: Request, root?: XcxNode) {
    if (root) {
      root.children.push(this)
    }
    this.request = request
    this.wxFile = new WxFile(this.request)

    this.cached()
    this.recursive()
    this.lack()
  }

  /**
   * 创建一个小程序节点树
   *
   * @static
   * @param {XcxNode.Options} options
   * @returns {(XcxNode | null)}
   * @memberof XcxNode
   */
  static create (options: XcxNode.Options): XcxNode | null {
    let { isMain, isForce, root } = options

    if (isMain && root) {
      log.debug(`XcxNode.create 不能同时设定'option.parent' 和 'root'`)
    }

    let request = new Request(options)

    if (!request.src) {
      if (isMain) {
        log.error(`找不到入口：${request.request}`)
      }
      return null
    }

    let xcxNode = xcxNodeCache.get(request.src)
    if (isForce || !xcxNode) {
      xcxNode = new XcxNode(request, root)
    }

    return xcxNode
  }

  /**
   * 编译，更新依赖列表和保存文件
   *
   * @memberof XcxNode
   */
  compile () {
    this.wxFile.updateDepends(this.useRequests)
    this.wxFile.save()
  }

  /**
   * 增加缓存
   *
   * @private
   * @memberof XcxNode
   */
  private cached () {
    xcxNodeCache.set(this.request.src, this)
  }

  /**
   * 递归依赖
   *
   * @private
   * @memberof XcxNode
   */
  private recursive () {
    let depends = this.wxFile.getDepends()

    for (let i = 0; i < depends.length; i++) {
      let { request, requestType } = depends[i]

      // 创建一个节点
      let xcxNode = XcxNode.create({
        request,
        requestType,
        parent: this.request.src,
        isMain: false,
        root: this,
        isThreeNpm: this.request.isThreeNpm
      })

      if (xcxNode) {
        // 添加可用的请求
        this.useRequests.push({
          request,
          requestType,
          src: xcxNode.request.src,
          srcRelative: xcxNode.request.srcRelative,
          ext: xcxNode.request.ext,
          dest: xcxNode.request.dest,
          destRelative: xcxNode.request.destRelative,
          isThreeNpm: xcxNode.request.isThreeNpm
        })
      } else {
        // 增加缺失的请求
        this.lackRequests.push({
          request,
          requestType
        })
      }
    }
  }

  /**
   * 处理缺失依赖列表
   *
   * @private
   * @memberof XcxNode
   */
  private lack () {
    if (this.lackRequests.length > 0) {
      // 将当前的请求地址记录到Next，用于下一次编译
      xcxNext.addLack(this.request.srcRelative)
      // 打印缺失库的日志信息
      this.lackRequests.forEach(lackRequest => {
        log.error(`找不到模块：${lackRequest.request} in ${this.request.srcRelative}`)
      })
    } else {
      // 从下一次的编译里移除
      xcxNext.removeLack(this.request.srcRelative)
    }
  }
}
