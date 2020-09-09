module.exports = {
    lintOnSave: false,
    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views'
            }
        }
    }
}