var gulp = require('gulp'), //Load Gulp First
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();
    eslint = require('gulp-eslint');

    //Link task for the JS

   gulp.task('lint',function(){
       return gulp.src(['./js/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())

   });
// script task to minify, rename and put in build folder

gulp.task('scripts', gulp.series ('lint',function(){
    return gulp.src('./js/*.js')
        .pipe(uglify()) // call uglify function on files
        .pipe(rename({ extname: '.min.js'})) // rename the ugly file
        .pipe(gulp.dest('./build/js'))
}));

gulp.task('say_hello', function(done){
    console.log("Hello!");
    done();
});


gulp.task('watch', function() {
    gulp.watch('js/*.js', gulp.series('scripts'));
 });


//browser sync

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });




    gulp.watch('build/js/*.js').on('change', browserSync.reload);
});





//default function that can reference multiple named tasks
gulp.task('default', gulp.parallel('watch', 'browser-sync'));