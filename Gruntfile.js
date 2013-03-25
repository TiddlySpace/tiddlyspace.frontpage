/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    require: false,
                    $: true,
                    ts: true,
                    Tiddlers: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            assets: {
                src: ['assets/*.js']
            },
            test: {
                src: ['test/*.js']
            }
        },
        copy: {
            test: {
                files: [{src: ['test/.tsapp'], dest: '.tsapp'}]
            }
        },
        clean: {
            test: ['.tsapp']
        },
        casper: {
            options: {
                test: true,
                'fail-fast': true,
                direct: true
            },
            'logged-in-tests': {
                src: ['test/logged-in.js']
            },
            'logged-out-tests': {
                src: ['test/not-logged-in.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-casper');

    grunt.registerTask('test', ['jshint', 'logged-in-tests', 'logged-out-tests']);
    grunt.registerTask('logged-in-tests', ['copy:test', 'casper:logged-in-tests']);
    grunt.registerTask('logged-out-tests', ['clean:test', 'casper:logged-out-tests']);
    grunt.registerTask('default', ['test']);
};
