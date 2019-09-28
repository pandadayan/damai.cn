//  gulp 的配置文件
const gulp = require('gulp'); // 引入模块
const rename = require('gulp-rename'); // 第三方模块

// task 任务  布置任务
// gulp.task('default', function() {
//     // 接收2个参数
//     // 参数1 任务名
//     // 参数2 任务函数
//     console.log('hello world');
// });

// gulp.task('sayhi', function() {
//     // 任务执行 gulp 任务名
//     // 如果不带任务名 默认执行 default任务
//     console.log('hi');
// });

// gulp.task('default', function() {
//     return new Promise((resolve, reject) => {
//         var a = 10;
//         var b = 8;
//         console.log(a + b);
//         resolve();
//     });
// });


// gulp.src()  选择路径
// gulp.dest()  目的地
// gulp.pipe()  管道 通道
gulp.task('copyindex', function() {
    return gulp
        .src('./src/html/index.html')
        .pipe(gulp.dest('./dist/html'));
});


// 拷贝非压缩版的JS文件 到dist目录
gulp.task('copyjs', function() {
    // return gulp
    //     .src(['./src/js/index.js', './src/js/news.js'])
    //     .pipe(gulp.dest('./dist/js'));

    return gulp
        .src(['./src/js/*.js', '!src/js/jquery.min.js'])
        .pipe(gulp.dest('./dist/js'));
});

// 复制并改名
gulp.task('rename', function() {
    return gulp.src('./src/js/index.js')
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./dist/js'));
})