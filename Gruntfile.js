'use strict';

module.exports = function (grunt) {

  var pkg = require('./package.json');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-conventional-changelog');

  var bowerrc = grunt.file.exists('./.bowerrc') ? grunt.file.readJSON('./.bowerrc') : { 'json': 'bower.json' };

  var bumpFiles = [ 'package.json', '../w11k-flash-bower/package.json' ];
  if (grunt.file.exists(bowerrc.json)) {
    bumpFiles.push(bowerrc.json);
  }

  grunt.initConfig({
    pkg: pkg,
    meta: {
      banner:
        '/**\n' +
          ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * <%= pkg.homepage %>\n' +
          ' *\n' +
          ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
          ' */\n'
    },

    clean: {
      dist: 'dist/*'
    },
    jshint: {
      src: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: [{
          expand: true,
          cwd: 'src/js',
          src: '**.js'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/js/w11k-flash.css': 'src/js/w11k-flash.scss'
        }
      }
    },
    copy: {
      template: {
        src: 'src/js/w11k-flash.tpl.html',
        dest: 'dist/js/w11k-flash.tpl.html'
      },
      flash: {
        expand: true,
        cwd: 'src/flash',
        src: '**/*',
        dest: 'dist/flash'
      },
      sass: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.scss',
          dest: 'dist/js'
        }]
      },
      less: {
        src: 'src/js/w11k-flash.less',
        dest: 'dist/js/w11k-flash.less'
      }
    },
    less: {
      dist: {
        options: {
          paths: ['src/js']
        },
        files: {
          'temp/w11k-flash.less.css': 'src/js/w11k-flash.less'
        }
      }
    },
    html2js: {
      template: {
        options: {
          base: 'src/js',
          module: 'w11k.flash.template',
          quoteChar: '\'',
          htmlmin: {
            collapseWhitespace: true
          }
        },
        files: {
          'dist/js/w11k-flash.tpl.js': 'src/js/w11k-flash.tpl.html'
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      code: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: [{
          expande: true,
          nosort: true,
          src: 'src/js/**/*.js',
          dest: 'dist/js/w11k-flash.js'
        }]
      },
      codeMinified: {
        files: [{
          expande: true,
          nosort: true,
          src: 'src/js/**/*.js',
          dest: 'dist/js/w11k-flash.min.js'
        }]
      }
    },
    bump: {
      options: {
        files: bumpFiles,
        commit: true,
        commitMessage: 'chore(project): bump version to %VERSION%',
        commitFiles: ['-a'],
        createTag: false,
        push: false
      }
    }
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean', 'jshint:src', 'sass', 'less', 'copy', 'html2js', 'uglify']);
};
