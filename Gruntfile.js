/* globals module, require */

module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    uglify: {
      global: {
          options:{
          	sourceMap:true,
          	sourceMapName : 'j/sourcemap.map'
          }, 
          
          files: {
          "j/site.min.js": ["js/main.js"]
        }
      }
    },

    sass: {
      global: {
        options: {
          style: "compressed"
        },
        files: {
          "css/global-unprefixed.css": "scss/main.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "css/global-unprefixed.css",
        dest: "css/main.css"
      }
    },

    shell: {
      jekyllServe: {
        //command: "jekyll serve --baseurl URL"
        command: "jekyll serve --baseurl"
      },
      jekyllBuild: {
        //command: "jekyll build --config _config-dev.yml"
        command: "jekyll build --config _config.yml"
      }
    },

    watch: {
      options: {
        //debounceDelay: 1000,
        //livereload: true,
      },
      site: {
        files: ["index.md", "_layouts/*.html", "_posts/*.md", "_includes/*.html", "feed.xml", "sitemap.xml","challenge_2015/index.md","lisez_ailleurs/index.md", "qui_suis_je/index.md","ma_pal/index.md","archive/index.md" ],
        tasks: ["shell:jekyllBuild"]
      },
      js: {
        files: ["j/site.min.js"],
        tasks: ["uglify", "shell:jekyllBuild"]
      },
      css: {
        files: ["scss/*.scss"],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      },
      svgIcons: {
        files: ["svg/*.svg"],
        tasks: ["svgstore", "shell:jekyllBuild"]
      }
    },

    svgstore: {
      options: {
        prefix : "shape-",
        cleanup: false,
        svg: {
          style: "display: none;"
        }
      },
      default: {
        files: {
          "_includes/svg-defs.svg": ["svg/*.svg"]
        }
      }
    }

  });

  require("load-grunt-tasks")(grunt);




  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("default", ["sass", "autoprefixer", "uglify", "svgstore", "shell:jekyllBuild", "watch"]);


grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});



};


