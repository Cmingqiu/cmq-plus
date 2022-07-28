const { src, dest, series } = require('gulp');
const sass = require('gulp-dart-sass');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');

/**
 * 打包sass,css文件
 */
function compile() {
  return src('./src/*.sass')
    .pipe(sass.sync())
    .pipe(autoprefixer({}))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

/**
 * 拷贝字体文件
 */
function copyfont() {
  return src('./packages/theme-chalk/src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'));
}

exports.build = series(compile);
