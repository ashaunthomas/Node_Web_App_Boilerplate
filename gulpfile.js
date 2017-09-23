var gulp = require('gulp'),
    bs   = require('browser-sync');

var reload = bs.reload;

gulp.task('serve', function() {
    bs({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['*.html','styles/*.css','scripts/*.js'], {cwd: 'app'}, reload);
});