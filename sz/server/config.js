const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wxe54ae05ec425a65f',

    // 微信小程序 App Secret
    appSecret: 'youran106412',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    serverHost: 'localhost',
    tunnelServerUrl: '',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',

    qcloudAppId: '1257722805',
    qcloudSecretId: 'AKID3PsBNPYDJ7lPtBoVwCThnkfQPErR5gAX',
    qcloudSecretKey: 'Vr6AxriR7bt4b0DF5jDbdR7dzCHE3m26',
    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: '106412',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
