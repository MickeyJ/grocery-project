var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');


//          JS/ES2015
// ***********************
gulp.task('scripts', () =>{
  browserify({
    entries: 'src/js/index.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify, { presets: ['es2015'] })
  .bundle()
  .pipe(source('script.min.js'))
  .pipe(gulp.dest('public/javascripts'));
});

//          SCSS
// ***********************
gulp.task('sass', function(){
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/stylesheets'));
});

// Watcher
// *************************
gulp.task('watch', function(){
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass', 'watch']);