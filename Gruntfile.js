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
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");

};