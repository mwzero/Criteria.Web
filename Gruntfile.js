module.exports = function(grunt) {

  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
	clean: ["dist"],
	
	copy: {
		dist: {
			files: [{
				expand: true,
				cwd: 'src',
				dest: 'dist',
				src: [
					'index.html','form.html','builder.html'
				]
			},{
				expand: true,
				cwd: 'src/js',
				dest: 'dist/js',
				src: [
					'*.js'
				]
			},{
				expand: true,
				dest: 'dist',
				src: [
					'assets'
				]
			}]
		}
	},
	bowercopy: {
	  options: {
		srcPrefix: 'bower_components'
	  },
	  scripts: {
		options: {
		  destPrefix: 'dist/vendor'
		},
		files: {
		  'jquery/jquery.js': 'jquery/dist/jquery.min.js',
		  
		  'bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.min.js',
		  'bootstrap/bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css',
		  'bootstrap/bootstrap-theme.css': 'bootstrap/dist/css/bootstrap-theme.min.css',
		  
		  'angular/angular.js': 'angular/angular.min.js',
		  'angular/angular-animate.js': 'angular-animate/angular-animate.min.js',
		  'angular/angular-messages.js': 'angular-messages/angular-messages.min.js',
		  'angular/angular-resource.js': 'angular-resource/angular-resource.min.js',
		  'angular/angular-ui-router.js': 'angular-ui-router/release/angular-ui-router.min.js',
		  
		  'ace/ace.js': 'ace/lib/ace/ace.js',
		  'ace/theme/twilight.css': 'ace/lib/ace/theme/twilight.css',
		  
		  'xml2json/xml2json.js': 'xml2json/xml2json.js'

		}
	  }
	},
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/**',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	htmlhint: {
		build: {
			options: {
				'tag-pair': true,
				'tagname-lowercase': true,
				'attr-lowercase': true,
				'attr-value-double-quotes': true,
				'doctype-first': true,
				'spec-char-escape': true,
				'id-unique': true,
				'head-script-disabled': true,
				'style-disabled': true
			},
			src: ['index.html']
		}
	},
	watch: {
		html: {
			files: ['index.html'],
			tasks: ['htmlhint']
		}
	}
  });
  //require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bower');
  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.registerTask('default', ['clean','copy', 'bowercopy']);
};