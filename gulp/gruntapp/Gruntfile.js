module.exports = function(grunt){

	//配置grunt方法
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		cssmin:{
			combine:{
				files:{
					"app/css/style.css":["app/css/background.css","app/css/fontsize.css"]
				}
			}
		},
		uglify:{
			dist:{
				files:{
					"app/js/main.min.js":["app/js/main.js"]
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.registerTask("default",["cssmin","uglify"]);
	// grunt.registerTask("default","",function(){
	// 	grunt.log.write("在终端运行Grunt命令就会运行这句话");
	// });
}