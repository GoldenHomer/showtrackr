var gulp = require('gulp'),
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'), // prevents syntax error from crashing node.
	templateCache = require('gulp-angular-templatecache');

gulp.task('sass', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso()) // Minify CSS
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('compress', function() { // Minify the loads of JS files.
  gulp.src([
    'public/vendor/angular.js',
    'public/vendor/*.js',
    'public/app.js',
    'public/services/*.js',
    'public/controllers/*.js',
    'public/filters/*.js',
    'public/directives/*.js'
  ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('templates', function(){ // Cache the Angular templates.
	gulp.src('public/views/**/*.html')
		.pipe(templateCache({root: 'views', module: 'ShowTrackrApp'}))
		.pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('public/stylesheets/*.scss', ['sass']);
  gulp.watch(['public/**/*.js', '!public/app.min.js','!public/vendor'], ['compress']);
});

gulp.task('default', ['sass', 'watch', 'compress', 'templates']); // compiles SASS files and watches for changes.
