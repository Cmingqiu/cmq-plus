const { src, dest, series } = require('gulp');
const sass = require('gulp-dart-sass');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');

const outputDir = 'lib';
/**
 * 打包sass,css文件
 */
function compile() {
  return src(`./src/*.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer({}))
    .pipe(cssmin())
    .pipe(dest(outputDir));
}

/**
 * 拷贝字体文件
 */
function copyfont() {
  return src(`./src/fonts/**`)
    .pipe(cssmin())
    .pipe(dest(`${outputDir}/fonts`));
}

exports.build = series(compile);
