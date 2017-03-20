fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});

fis.match('*.{css,js,png,jpg}', {
    useHash: true
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.{css,less}', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});

fis.match('*.html', {
    optimizer: fis.plugin('html-minifier')
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

// css 打包到 css/aio.css
fis.match('*.{css,less}', {
    packTo: '/css/aio.css'
});
