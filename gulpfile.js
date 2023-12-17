const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');

gulp.task('style', ()=>{
    return gulp.src('src/scss/index.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
})

gulp.task('watch', () => {
    return gulp.watch('src/scss/*.scss', (done)=>{
        gulp.series(['style']) (done)
    })
})

gulp.task('minify', () => {
    return gulp.src('js/main.js')
    .pipe(minify())
    .pipe(gulp.dest('js'))
})