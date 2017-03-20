
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{css,js,png,jpg}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});