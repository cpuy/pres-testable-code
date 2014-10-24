var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ["./app", "./"]
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('serve', ['browser-sync'], function() {
    gulp.watch("app/*.html", ['bs-reload']);
});

