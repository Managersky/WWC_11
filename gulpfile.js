var gulp = require("gulp");

var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css"); //minifikacja CSS
var uglify = require("gulp-uglifyes"); //minifikacj JS
var concat = require("gulp-concat"); //laczenie plikow w jeden
var imagemin = require("gulp-imagemin"); //optymalizacja obrazkow
var changed = require("gulp-changed"); //optymalizacja obrazkow - sprawdza ktore obrazki juz zostaly poddane minifikacji aby nie powtarzac na nich zadania
var htmlReplace = require("gulp-html-replace"); //minifikacja HTML
var htmlmin = require("gulp-htmlmin");  //minifikacja HTML
var del = require("del"); // stworzenie wersji produkcyjnej - usuniecie folderu dest
var sequence = require("run-sequence"); //odpalenie zadan synchronicznie (gulp ma nature asynchroniczna)
var deploy = require("gulp-gh-pages"); //push strony na github-pages

var path = {
    dist: "dist/",
    src: "src/",
    cssin: "src/css/**/*.css",
    jsin: "src/js/**/*.js",
    imgin: "src/images/**/*.{jpg,jpeg,png,gif}",
    htmlin: "src/*.html",
    scssin: "src/scss/**/*.scss",
    fontsin: "src/fonts/**/*.*",
    cssout: "dist/css/",
    jsout: "dist/js/",
    imgout: "dist/images/",
    htmlout: "dist/",
    scssout: "src/css/",
    fontsout: "dist/fonts/",
    cssoutname: "style.css",
    jsoutname: "script.js",
    cssplaceout: "css/style.css",
    jsplaceout: "js/script.js"
};

gulp.task("reload", function () {
    browserSync.reload();
});

gulp.task("serve", ["sass"], function () {
    browserSync({
        server: path.src
    });

    gulp.watch([path.htmlin, path.jsin], ["reload"]);
    gulp.watch(path.scssin, ["sass"]);
});

gulp.task("sass", function () {
    return gulp.src(path.scssin)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 3 versions"]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.scssout))
        .pipe(browserSync.stream());
});

gulp.task("css", function () {
    return gulp.src(path.cssin)
        .pipe(concat(path.cssoutname))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.cssout));
});

gulp.task("js", function () {
    return gulp.src(path.jsin)
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(concat(path.jsoutname))
        .pipe(uglify())
        .pipe(gulp.dest(path.jsout));
});

gulp.task("img", function () {
    return gulp.src(path.imgin)
        .pipe(changed(path.imgout))
        .pipe(imagemin())
        .pipe(gulp.dest(path.imgout));
});

gulp.task("html", function () {
    return gulp.src(path.htmlin)
        .pipe(htmlReplace({
            "css": path.cssplaceout,
            "js": path.jsplaceout
        }))
        .pipe(htmlmin({
            sortAttributes: true, //sortowanie po atrybutach
            sortClassName: true, //sortowanie po klasach
            //oba sortowania są istotne dla gzipa - optymalizacja pod katem predkosci ladowania
            // collapseWhitespace: true //usuwa wszystkie biale znaki
        }))
        .pipe(gulp.dest(path.dist));
});

gulp.task("fonts", function () {
    return gulp.src(path.fontsin)
        .pipe(gulp.dest(path.fontsout));
});

gulp.task("clean", function () {
    return del([path.dist]);
});

gulp.task("build", function () {
    sequence("clean", ["html", "js", "css", "img", "fonts"]);
});

gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(deploy());
});

gulp.task("default", ["serve"]);