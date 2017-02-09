module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: 'wp-content/themes/clean-portfolio/sass/*.scss',
        tasks: ['sass:dev', 'notify:successCss'],
      },
      js: {
        files: [
          'wp-content/themes/clean-portfolio/js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint','babel','uglify:scripts','notify:successJs']
      }
    },
    sass: {
        options: {
            sourceMap: false
        },
        dev: {
            files: {
              //We fake the minified version here, which is produced properly by prod chain
              'stylesheets/main-min.css': 'wp-content/themes/clean-portfolio/sass/main.scss'
            }
        },
        dist: {
            files: {
              'stylesheets/main.css': 'wp-content/themes/clean-portfolio/sass/*.scss'
            }
        }
    },
    autoprefixer: {
      dist: {
        options: {
          browsers: ['last 1 version', '> 1%', 'ie 8']
        },
        files: {
          'stylesheets/main-prefixed.css': ['stylesheets/main.css']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'stylesheets/main-min.css': ['stylesheets/main-prefixed.css']
        },
      },
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'wp-content/themes/clean-portfolio/js/main.js']
    },
    babel: {
        options: {
            presets: ['es2015']
        },
        dist: {
            files: {
                'js/main-babel.js': 'wp-content/themes/clean-portfolio/js/main.js'
            }
        }
    },
    uglify: {
      scripts: {
        files: {
          'js/scripts-min.js': ['wp-content/themes/clean-portfolio/js/*.js']
        },
      },
    },
    browserSync: {
      files: {
        src : [
          'stylesheets/*.css',
          'js/*.js',
          'wp-content/themes/clean-portfolio/*.php',
          'wp-content/themes/clean-portfolio/*.html'
        ],
      },
      options: {
        watchTask: true,
        proxy: 'portfolio:8888'
      }
    },
//Notification toasts
    notify: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        success: true,
        duration: 3
      },
      successCss: {
          options:{
              title: "Grunt successful",
              message: "All CSS tasks complete"
          }
      },
      successJs: {
          options:{
              title: "Grunt successful",
              message: "All JS tasks complete"
          }
      },
      successProduction: {
          options:{
              title: "Grunt successful",
              message: "Project prepared for production"
          }
      }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-babel');
  // Register the default tasks.
  grunt.registerTask('default', ['browserSync', 'watch', 'notify']);
  grunt.registerTask('prod', ['sass:dist', 'autoprefixer', 'cssmin', 'jshint','babel','uglify:scripts', 'notify:successProduction']);
};