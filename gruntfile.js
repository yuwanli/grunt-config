module.exports = function(grunt){

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var basePath = '2017.06/paperplanes/';

    var options = {
        pkg: grunt.file.readJSON('package.json'),
        cssmin:{
            target:{
                files:[{
                    expand: true,
                    cwd: basePath + '/css',
                    src: ['*.css', '!*.min.css'],
                    dest: basePath + '/build/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            option:{
                ASCIIOnly: true
            },
            my_target:{
                files:[{
                    expand: true,
                    cwd: basePath + '/js',
                    src: ['*.js', '!*.min.js'],
                    dest: basePath + '/build/js',
                    ext: '.min.js'
                }]
            }
        },
        imagemin: {                          // Task
            static: {                          // Target
                options: {                       // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }]
                }
            },
            dynamic:{
                files:[{
                    expand: true,                  // Enable dynamic expansion
                    cwd: basePath + '/images/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: basePath + '/build/images/'        // Destination path prefix
                }]
            }
        },
        connect: {
            options: {
                port: 9323,
                hostname: '*',
                livereload: 35729
            },
            server: {
                options: {
                    /*open: true,*/
                    base: [
                       basePath +  '/'
                    ]
                }
            }
        },
        watch: {
             react:{
                 files: [ basePath + 'jsx/*.jsx' ],
                 tasks: [ 'react' ]
             },
            livereload: {
                options: {
                    livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
                },
                files: [
                   basePath + '/*.html',
                   basePath + '/*/*.html',
                   basePath + '/css/{,*/}*.css',
                   basePath + '/js/{,*/}*.js',
                   basePath + '/jsx/{,*/}*.jsx',
                   basePath + '/images/{,*/}*.{png,jpg}'
                ]
            }
        },
        jshint: {
            all: [
                basePath + '/js'
            ],
            options: {
                browser: true,            // browser environment
                devel: true                //
            }
        },
        autoprefixer: {
            options: {
              browsers: ['last 2 versions','ie 8', 'ie 9'],
              map:true,
            },
            single_file: {
                src: basePath+'css/style.css',
                dest: basePath+'css/style.css'
            }
          },

    };


    grunt.initConfig(options);


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', [
        'cssmin',
        'uglify',
        'imagemin',
        'autoprefixer',
        'watch',
        'jshint'
    ]);
	grunt.registerTask('serve', [
    'connect:server',
    'watch',
    'autoprefixer',
    'jshint'
  ]);

};