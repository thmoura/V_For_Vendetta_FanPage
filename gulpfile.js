/* Declarando as variaveis e configurando as requisições dos pacotes instalados */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

/* Criando as funções */
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

/* Exportando as funcões, usando o "parallel"
para que elas sejam executadas de forma simultaneas (sincrona)*/
exports.default = gulp.parallel(styles,images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}