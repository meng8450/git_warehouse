const { message: { checkSignature } } = require('../qcloud')

/**
 * 响应 GET 请求（响应微信配置时的签名检查请求）
 */
async function get (ctx, next) {
    const { signature, timestamp, nonce, echostr } = ctx.query
    if (checkSignature(signature, timestamp, nonce)) ctx.body = echostr
    else ctx.body = 'ERR_WHEN_CHECK_SIGNATURE'
}

async function post (ctx, next) {
    // 检查签名，确认是微信发出的请求
    const { signature, timestamp, nonce } = ctx.query
    if (!checkSignature(signature, timestamp, nonce)) ctx.body = 'ERR_WHEN_CHECK_SIGNATURE'

    ctx.body = 'success'
}

module.exports = {
    post,
    get
}
