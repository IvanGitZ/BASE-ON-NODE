const gulp = require('gulp');
const gulpCopy = require('gulp-copy');
const minImage = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');

/*
	-- 常用方法 --
	gulp.task  -- 定义任务
	gulp.src   -- 输入文件路径
	gulp.dest  -- 输出文件路径
	gulp.watch -- 监听文件变化

	-- node 方法 -- 
	pipe       -- 管道

*/
//定义具体任务
gulp.task('message',() => {
	console.log("执行具体任务,需要在终端中运行 gulp message(任务名)");
});


//定义拷贝任务
gulp.task('copyHtml',() => {
	//找到需要拷贝文件的路径
	gulp.src('src/*.html').pipe(gulp.dest('dist'));//*.html拷贝该路径下所有的html文件
});

//定义压缩图片任务
gulp.task('imageMin',() => {
	gulp.src("src/images/*").pipe(minImage()).pipe(gulp.dest("dist/images"));
})

//定义压缩js代码
//1.下载模块 -- gulp-uglify
//2.引入模块
//3.定义任务
//4.在src下创建一个js文件夹,并且穿件一个js文件,随便写一个函数
//5.实现任务
gulp.task('ugLifyJs',() => {
	gulp.src("src/js/*").pipe(uglify()).pipe(gulp.dest("dist/js"));
});


//定义sass转css任务
gulp.task('sass',() => {
	gulp.src("src/sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
})

//定义默认任务
gulp.task('default',["message","copyHtml","imageMin","sass","ugLifyJs"]);

//监听任务
gulp.task("watch",() => {
	gulp.watch("src/js/*.js",["ugLifyJs"]);
	gulp.watch("src/images/*",["imageMin"]);
	gulp.watch("src/sass/*.scss",["sass"]);
	gulp.watch("src/*.html",["copyHtml"]);
});

//webserver
gulp.task('mywebserver',() => {
	return gulp.src("app").pipe(webserver({port:8000,livereload:true,open:true}));//livereload热更新
});










