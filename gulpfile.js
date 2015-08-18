var gulp = require('gulp')
var browserSync = require('browser-sync')

gulp.task('default', function () {
  browserSync({
    port: 3030,
    server: {
      baseDir: './www'
    }
  })
})
