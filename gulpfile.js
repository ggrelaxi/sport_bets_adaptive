const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

const browserSync = require('browser-sync').create();

gulp.task('style', function () {
    return gulp
        .src('src/style/**/*.scss')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(concat('all.css'))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/style'))
        .pipe(browserSync.stream());
});

gulp.task('es', function () {
    return gulp
        .src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('imgmin', function () {
    return gulp.src('src/img/**/*').pipe(imagemin()).pipe(gulp.dest('build/img'));
});

gulp.task('html', function () {
    return gulp.src('src/*.html').pipe(gulp.dest('build'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'build',
            domain: 'localhost:3001',
        },
    });

    gulp.watch('src/img/**/*.*', gulp.series('imgmin')).on('change', browserSync.reload);
    gulp.watch('src/style/**/*.scss', gulp.series('style')).on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', gulp.series('es')).on('change', browserSync.reload);
    gulp.watch('src/*.html', gulp.series('html')).on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('style', 'es', 'imgmin', 'serve'));
