module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
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
        clean: {
            all: [
                "dist"
            ],
            max: [
                "dist/emoji.css"
            ]
        },
        copy: {
            max: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            "lib/emoji.js"
                        ],
                        dest: "dist/"
                    }
                ]
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
        compress: {
            dist: {
                options: {
                    archive: "dist/angular-emoji.zip"
                },
                files: [
                    {
                        src: [
                            "dist/*.js",
                            "dist/*.css",
                            "dist/*.png",
                            "LICENSE",
                            "bower.json"
                        ]
                    }
                ]
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
                    outputStylesheet: "emoji.css",
                    baseRules: {
                        "text-indent": "-9999px",
                        display: "inline-block"
                    },
                    magick: {
                        background: "none",
                        depth: 7
                    }
                }
            }
        }
    });

    grunt.registerTask("bower", "Generate a bower.json file and publish built assets to Bower", function () {
        grunt.file.write("bower.json", JSON.stringify({
            name: "angular-emoji",
            version: grunt.config("pkg.version"),
            main: "dist/emoji.min.js"
        }, null, 4));
    });

    grunt.registerTask("default", [
        "jshint",
        "clean:all",
        "montage",
        "uglify",
        "cssmin",
        "clean:max",
        "bower",
        "compress"
    ]);

    grunt.registerTask("dev", [
        "jshint",
        "clean:all",
        "montage",
        "copy"
    ]);

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-compress");
    grunt.loadNpmTasks("grunt-montage");

};