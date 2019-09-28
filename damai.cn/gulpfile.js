const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const less = require('gulp-less');
const path = require('path');
const spritesmith = require('gulp.spritesmith');

// 1. 压缩html
// npm i gulp-htmlmin -D
gulp.task('htmlmin', () => {
    return gulp
        .src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'));
});


// 2. 压缩css
gulp.task('cssmin', () => {
    return gulp
        .src('./src/style/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
});

// 3. 压缩js
gulp.task('jsmin', () => {
    return gulp
        .src('./src/js/*.js')
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});

// 4.压缩图片
gulp.task('imagemin', () => {
    return gulp
        .src('./src/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 7 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('./dist/img'));
});

// 5. 合并js
gulp.task('concat', function() {
    return gulp
        .src(['./src/js/jquery.min.js', './src/js/index.js', './src/js/news.js'])
        .pipe(concat('all.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('./dist/js'));
});

//6. less编译
gulp.task('less', function() {
    return gulp.src('./src/style/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/style'));
});

// 7. 文件监听
gulp.task('watchless', function() {
    gulp.watch('./src/style/*.less', gulp.series('less'));
});

// 自动化构建
gulp.task('default', function() {
    gulp.watch(['./src/html/*.html', './src/js/*.js', './src/style/*.css'], gulp.series('htmlmin', 'concat', 'cssmin'));
});


gulp.task('sprite', function() {
    var spriteData = gulp.src('src/img/*.jpg').pipe(spritesmith({
        imgName: 'sprite.jpg',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('src/img'));
});