var gulp = require('gulp'),
    del = require('del');

// 检查代码格式
gulp.task('lint', function(){
    console.log('lint');
});

// 编译
gulp.task('compile', function(){
    console.log('compile');
});

// 监听
gulp.task('watch', function(){
    console.log('watch');
});

// 删除文件
gulp.task('clear', function(){
    del(['var/build/*.js', '!var/build/demo.min.js']).then(function(){
        console.log('del');
    });
});

gulp.task('default', ['lint', 'compile']);
