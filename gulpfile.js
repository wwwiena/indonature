const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');

gulp.task('pug', function () {
  return gulp.src(['src/*.pug'])
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
  return gulp.src(['src/styles/*.scss'])
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', () => {
  gulp.watch(['src/*.pug', 'src/**/*.pug'], ['pug']);
  gulp.watch(['src/styles/*.scss', 'src/styles/bootstrap/*.scss'], ['sass']);
});

gulp.task('default', ['pug', 'sass']);
