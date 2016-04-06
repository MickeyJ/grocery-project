var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

//          JS/ES2015
// ***********************
gulp.task('scripts', () =>{
  browserify({
    entries: 'src/js/',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify, { presets: ['es2015'] })
  .bundle()
  .pipe(source('script.min.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest('public/javascripts'));
});

//          SCSS
// ***********************
gulp.task('sass', () =>{
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/stylesheets'));
});

// Watcher
// *************************
gulp.task('watch', () =>{
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass', 'watch']);