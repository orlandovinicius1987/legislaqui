const mix = require('laravel-mix')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 */

mix.autoload({
    jquery: [
        '$',
        'window.jQuery',
        'jQuery',
        'window.$',
        'jquery',
        'window.jquery',
    ],
    'popper.js/dist/umd/popper.js': ['Popper'],
})
    .js('resources/js/app.js', 'public/js', 'node-modules')
    .js('resources/js/admin.js', 'public/js/admin')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/admin/admin.scss', 'public/css/admin.css')
    .version()

/*
 |--------------------------------------------------------------------------
 | Plugins
 |--------------------------------------------------------------------------
 */

const LiveReloadPlugin = require('webpack-livereload-plugin')

mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin(),

        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'js/*',
                '!js/item.js',
                '!static-files*',
            ],
        }),
    ],

    output: {
        chunkFilename: 'js/chunks/[chunkhash].js',
    },
})
