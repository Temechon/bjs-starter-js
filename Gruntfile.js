module.exports = function (grunt) {

    // load all grunt tasks
    require('jit-grunt')(grunt);

    grunt.initConfig({
        //Server creation
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '.',
                    open:true
                }
            }
        }
    });

    grunt.registerTask('default', 'Compile and watch source files', [
        'connect:server:keepalive'
    ]);
};


