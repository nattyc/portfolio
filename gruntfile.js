module.exports = function(grunt){
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        grunt.initConfig({
  imagemin: {                          // Task
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: '/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'build/img/'                  // Destination path prefix
      }]
    }
  }
});
})



    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', 'imagemin');

};
