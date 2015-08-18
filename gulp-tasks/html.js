var gulp = require('gulp')
var rename = require('gulp-rename')
var browserSync = require('browser-sync')

gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
    .pipe(
      rename(function (path) {
        path.dirname = ''
      }))
    .pipe(gulp.dest('./www/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
