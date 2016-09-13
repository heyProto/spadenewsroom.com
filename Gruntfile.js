module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        //Read the file package.json.
        pkg: grunt.file.readJSON("package.json"),
        js_src_path: 'src/js', //Property that sotres sorce path to the codes. (Useful in the the configuration).
        js_distro_path_js: 'dist/js',
        css_src_path: 'src/css',
        css_distro_path: 'dist/css',

        /*
        This package concats all the files in the source ("src") configuration to one file and store it in destination
        location mentioned.

        In this configuration :
            1. All the code files will be concatinated as allCodes.js and stored at dist/
            2. All the test files (*.js) will be concatinated and stored at dist/
        */
        concat:{
            options: {
                separator: ';'
            },
            devJS: {
                "src":['<%= js_src_path %>/custom.js'],
                "dest": '<%= js_distro_path_js %>/<%= pkg.name %>.<%= pkg.version %>.js'
            },
            devCSS:{
                'src': ['<%= css_src_path %>/custom.css'],
                'dest': '<%= css_distro_path %>/<%= pkg.name %>.<%= pkg.version %>.css'
            },
            prodJS:{
                "src":['<%= js_src_path %>/ga.js', 'dist/js/<%= pkg.name %>.<%= pkg.version %>.min.js'],
                "dest": '<%= js_distro_path_js %>/<%= pkg.name %>.<%= pkg.version %>-prod.min.js'
            },
            prodCSS: {
                'src': ['<%= css_src_path %>/custom.css'],
                'dest': '<%= css_distro_path %>/<%= pkg.name %>.<%= pkg.version %>.css'
            }
        },

        /*
        This package will minify the css files mentioned in the source of configuration.
        */
        cssmin: {
            'minify': {
                'expand': true,
                'cwd': '<%= css_distro_path %>/',
                'src': ['<%= pkg.name %>.<%= pkg.version %>.css'],
                dest: '<%= css_distro_path %>/',
                ext: '.<%= pkg.version %>.min.css'
            }
        },

        uglify: {
            'my_target': {
                'files': {
                '<%= js_distro_path_js %>/<%= pkg.name %>.<%= pkg.version %>.min.js': // destination
                ['<%= js_distro_path_js %>/<%= pkg.name %>.<%= pkg.version %>.js'] // source
                }
            },
            'options': {
                'preserveComments': 'some',
                'compress': {
                    'drop_console': true
                }
            }
        },

        clean: ['<%= js_distro_path_js %>/<%= pkg.name %>.<%= pkg.version %>.js', '<%= css_distro_path %>/<%= pkg.name %>.<%= pkg.version %>.css']

    });

    //Loading all the packages required.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //Register a task called "minify" and on command execution run the task concat and then uglify.
    grunt.registerTask('minifyDev',['concat:devJS', 'concat:devCSS', 'uglify', 'cssmin', 'clean']);
    grunt.registerTask('minifyProd',['concat:devJS', 'uglify', 'clean', 'concat:prodJS', 'concat:prodCSS', 'cssmin', 'clean']);
};
