module.exports = function (grunt) {

    "use strict";

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
        spritesheet: {
            compile: {
                options: {
                    outputCss: "emoji.css",
                    selector: ".emoji",
                    downsampling: "LanczosSharp",
                    output: {
                        "normal": {
                            pixelRatio: 1,
                            outputImage: "emoji.png"
                        },
                        "64": {
                            pixelRatio: 2,
                            outputImage: "emoji@2x.png"
                        }
                    }
                },
                files: {
                    dist: "res/emoji/*.png"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("node-spritesheet");

};