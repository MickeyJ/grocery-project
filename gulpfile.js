var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

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

gulp.task('watch', ['scripts'], () =>{
  gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['watch']);