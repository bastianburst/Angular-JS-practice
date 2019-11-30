/*
* DEPENDENCIAS GULP
*/
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync').create(),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream,
    livereload = require('gulp-livereload'),
    ignore = require('gulp-ignore'),
    rimraf = require('gulp-rimraf'),
    nib = require('nib'),
    templateCache = require('gulp-angular-templatecache'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    uncss = require('gulp-uncss'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify');
    
/*
* Configuración Servidor de Desarrollo
*/
gulp.task('dev', function () {
    browserSync.init({
        server: {
            baseDir: "./source",
            hostname: '0.0.0.0',
            livereload: true,
        },
        files: ["source/**/**/**/**/**/**/**/*.*"],
        //browser: 'google-chrome',
        port: 8001,
    });

});

//Verificar cambios en el html
gulp.task('html', function () {
    gulp.src('./source/**/**/**/*.html')
        .pipe(browserSync.stream());
});

// Preprocesa archivos Stylus a CSS
gulp.task('css', function () {
    gulp.src('./source/app/**/**/*.styl')
        .pipe(stylus({
            use: nib(),
        }))
        .pipe(gulp.dest('./source/app/'))
        .pipe(browserSync.stream());
});

//Encuentra error JS
gulp.task('js', function () {
    return gulp.src('./source/app/**/**/**/**/**/**/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(browserSync.stream());
});

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.html
gulp.task('inject', function () {
    var sources = gulp.src(['./source/app/**/**/**/**/**/**/*.js', './source/app/**/**/**/**/*.css']);
    return gulp.src('index.html', { cwd: './source' })
        .pipe(inject(sources, {
            read: false,
            ignorePath: '/source'
        }))
        .pipe(gulp.dest('./source'))
       // .pipe(browserSync.stream());
});

// Inyecta las librerias que instalemos vía Bower
gulp.task('wiredep', function () {
    gulp.src('./source/index.html')
        .pipe(wiredep({
            directory: './source/lib'
        }))
        .pipe(gulp.dest('./source'));
});

//Ejecuta tareas si se realiza algún cambio
gulp.task('watch', ['inject', 'html', 'css', 'js','plantilla'], function () {
    gulp.watch(['source/**/**/**/**/**/*.html', 'source/**/**.html', 'source/*.html'], ['html']);
    gulp.watch('source/app/**/**/**/**/**/*.styl', ['css', 'inject']);
    gulp.watch(['source/app/**/**/**/**/**/**/*.js', 'source/app/*.js' ], ['js', 'inject']);
});

/*
* Limpiar Directorio Producción
*/
gulp.task('limpiar', function() {
    gulp.src('./dist/', { read: false }) // much faster
    .pipe(rimraf());
});

/*
* Optimización del código
*/
gulp.task('plantilla', function () {
    gulp.src('./source/app/**/**/**/**/**/**/**/*.html')
        .pipe(templateCache({
            root: 'app/',
            module: 'templates',
            standalone: true
        }))
        .pipe(gulp.dest('./source/app/'));
});

gulp.task('comprimir',function() {
   gulp.src('./source/index.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify({mangle: false })))
    .on('error', gutil.log)
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copyHtml', function() {
    gulp.src('./source/lib/fontawesome/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));
    
     gulp.src('./source/index.html')
    .pipe(useref())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));

});

//Copia de Imagenes a Carpeta Producción
gulp.task('copiarImg',function() {
        gulp.src([
        './source/images/**/**.*'
    ])
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'));
})

gulp.task('eliminarCss', function() {
    gulp.src('./dist/css/style.min.css')
    .pipe(uncss({
    html: [
        './dist/index.html' 
        ]}))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});

/*
* Servidor de Producción
*/
gulp.task('build', function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
            hostname: '0.0.0.0',
            livereload: true,
        },
        //files: ["source/**/*.*"],
        //browser: 'google-chrome',
        port: 8082,
    });

});

//Servidor desarrollo
gulp.task('default', ['inject','dev', 'watch']);
//gulp.task('desarrollo', ['dev', 'inject', 'watch']);

//Configurar las dependencias instaladas con bower
gulp.task('bower', ['wiredep']);

//Tareas para optimizar el código
gulp.task('opt-plantilla',['plantilla']);
gulp.task('opt-build', ['comprimir', 'copiarImg']);
gulp.task('opt-html', ['copyHtml']);
gulp.task('opt-css', ['eliminarCss']);

//Servidor Producción
gulp.task('produccion', ['build']);