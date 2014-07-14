/**
 * Created by Dave Jackson on 7/13/2014.
 */
module.exports = function (grunt) {

    // Load tasks provided by each plugin
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-jade");

    // Project configuration
    grunt.initConfig({
        coffee: {
            "rest-fx": {
                src: ['src/rest-fx/**/*.coffee'],
                dest: 'dist/rest-fx.js'
            }
        },
        stylus: {
            build: {
                src: "src/showcase/spa/styles/**/*.styl",
                dest: "public/styles/app.css"
            }
        },
        jade: {
            build: {
                options: {
                    pretty: true
                },
                src: "src/views/**/*.jade",
                dest: "public/index.html"
            }
        }
    });
    // Define the default task
    grunt.registerTask('default', ['coffee', 'stylus', 'jade']);
};