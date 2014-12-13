var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('sass', function() {
    gulp.src('./src/styles/**/*.scss')
			.pipe(sass())
			.on('error', console.log)
			.pipe(concat('style.css'))
			.on('error', console.log)
			.pipe(minifycss())
			.pipe(gulp.dest('./assets/css'));
});

gulp.task('scripts', function () {
	gulp.src(['src/js/core/angular.min.js',
						'src/js/core/angular-route.min.js',
						'src/js/core/datef.js',
						'src/js/core/ru.js'], {read: true})
		.on('error', console.log)
		.pipe(concat('angular.core.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));

	gulp.src(['src/js/modules/*.js',
						'src/js/classes/*.js',
						'src/js/controllers/*.js',
						'src/js/providers/*.js',
						'src/js/config.js'], {read: true})
		.on('error', console.log)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function () {
	gulp.watch(['src/styles/**/*.scss'], ['sass']);
	gulp.watch(['src/js/**/*.js'], ['scripts']);
});


gulp.task('build', ['sass', 'scripts']);
gulp.task('default', ['build', 'watch']);
