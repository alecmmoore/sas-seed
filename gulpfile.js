var gulp = require('gulp');

//--EXTERNAL(NPM) DEPENDENCIES
var inject = require('gulp-inject');
var replace = require('gulp-replace');
var fs = require("fs");

//--OPTIMIZED BUILD DEPENDENCIES
var uglify = require('gulp-uglify');
var clean = require('del');

var jshint = require('gulp-jshint');

//--Config Variables--\\
var config = {
    build_destination: './bin',
    temp_destination: './bin'
}

gulp.task('inject-app', function () {
    var target = gulp.src('index.html');

    var sources = gulp.src([
        , './lib/*.js!'
        , './js/**/*module*.js' //modules
        , './js/*.js!(*module*)' //app shell
        , './js/services/*.js!(*module*)' //services
        , './js/directives/**/*.js!(*module*)' //directives
        , './js/controllers/**/*.js!(*module*)' //controllers
        , './css/**/*.css'], {read: false});

    return target.pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./'));
});
