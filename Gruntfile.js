module.exports = function (grunt) {

    "use strict";

    var exec = require("child_process").exec,
        glob = require("glob");

    grunt.initConfig({
        jshint: {
            options: {
                camelcase: true,
                immed: true,
                quotmark: "double",
                strict: true,
                trailing: true,
                undef: true,
                white: true
            },
            browser: {
                options: {
                    browser: true,
                    es3: true,
                    globals: {
                        angular: true
                    }
                },
                files: {
                    src: [
                        "lib/**/*.js"
                    ]
                }
            },
            node: {
                options: {
                    node: true
                },
                files: {
                    src: [
                        "Gruntfile.js",
                        "package.json",
                        "component.json"
                    ]
                }
            }
        },
        uglify: {
            browser: {
                files: {
                    "dist/emoji.min.js": [
                        "lib/emoji.js"
                    ]
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: "dist/",
                src: [
                    "*.css"
                ],
                dest: "dist/",
                ext: ".min.css"
            }
        },
        montage: {
            "21x21": {
                files: {
                    dist: [
                        "res/emoji/*.png"
                    ]
                },
                options: {
                    size: 21,
                    prefix: ".emoji",
                    outputImage: "emoji.png",
                    outputStylesheet: "emoji.css"
                }
            }
        }
    });

    grunt.registerTask("default", [
        "jshint",
        "montage",
        "uglify",
        "cssmin"
    ]);

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-montage");

};