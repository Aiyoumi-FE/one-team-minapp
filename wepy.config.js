const path = require('path');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
var prod = process.env.NODE_ENV === 'production';
let productionDomainName = 'https://api.a.com/' // 生产环境与名
let developmentDomainName = 'http://192.168.4.102:9999/mockjsdata/226' // 测试域名

module.exports = {
    wpyExt: '.wpy',
    eslint: true,
    cliLogs: !prod,
    build: {
        web: {
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    resolve: {
        alias: {
            counter: path.join(__dirname, 'src/components/counter'),
            '@': path.join(__dirname, 'src')
        },
        aliasFields: ['wepy'],
        modules: ['node_modules']
    },
    compilers: {
        less: {
            compress: true,
            plugins: [new LessPluginAutoPrefix({ browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6'] })]
        },
        /*sass: {
          outputStyle: 'compressed'
        },*/
        babel: {
            sourceMap: true,
            presets: [
                'env'
            ],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions',
            ]
        }
    },
    plugins: {},
    appConfig: {
        noPromiseAPI: ['createSelectorQuery'],
        baseUrl: process.env.NODE_ENV === 'production' ? productionDomainName : developmentDomainName
    }
}

if (prod) {

    // 压缩sass
    // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    }
}
