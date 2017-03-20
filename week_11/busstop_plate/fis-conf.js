fis.match('*.{css}', {
    useHash: true
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.{css,less}', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
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
/**
 * Created by tutu on 17/2/21.
 */
