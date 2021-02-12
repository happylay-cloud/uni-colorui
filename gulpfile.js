const gulp = require('gulp');

const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

gulp.task('compileScss', function () {
    return src('./theme/*.scss')
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(dest('./lib'));
});

gulp.task('copyCss', function () {
    return src('./theme/*.css')
        .pipe(cssmin())
        .pipe(dest('./lib'));
});

gulp.task('copyFont',function () {
    return src('./theme/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./lib/fonts'));
})

gulp.task('copyComponents',function () {
    return src('./theme/components/**')
        .pipe(dest('./lib/components'));
})

gulp.task('build',['copyCss','copyFont','copyComponents'], function() {
    // 默认执行方法
});
