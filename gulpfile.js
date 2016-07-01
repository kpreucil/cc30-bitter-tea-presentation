var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var del = require('del');
var useref = require('gulp-useref');
var concat = require('gulp-concat');

//gulp.task(
//	'watch',
//	function () {
//		watch('./**/*', function (events) {
//			gulp.start('default');
//		});
//	}
//);


gulp.task('clean', function(){
    return del(['./dist/index.html', './dist/scripts/*', './dist/css/*']);
});


gulp.task('moveHTML',['clean'], function(){
    return gulp.src('./html/*.html')
        .pipe(gulp.dest('dist'));
});


gulp.task('combineJS', ['clean'], function(){
    return gulp.src('./lib/**/*.js')
        .pipe(concat('combined.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'));

});

gulp.task('combineCSS', ['clean'], function(){
    return gulp.src('./css/**/*.css')
        .pipe(concat('combined.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('putUtilInTests', ['clean'], function(){
    return gulp.src('./lib/utilities/*.js')
        .pipe(gulp.dest('tests'));
});

gulp.task('default', ['clean','combineJS', 'combineCSS', 'moveHTML']);
