var gulp = require('gulp')
var rename = require('gulp-rename')

gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
    .pipe(
      rename(function (path) {
        path.dirname = ''
      }))
    .pipe(gulp.dest('./www/'))
})
