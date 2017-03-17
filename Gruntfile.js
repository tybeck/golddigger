'use strict';

module.exports = function (grunt) {

  var _ = require('lodash'),

    chalk = require('chalk');

  var pkg = {

    'grunt': null,

    msg: function (msg) {

      console.log(chalk.bgWhite(chalk.red('## ') + chalk.black('Hoagies On Main') +

        chalk.red(' ## ') + chalk.black(msg)));

      return this;

    },

    /**
      * Load grunt tasks automatically
      * Time how long tasks take. Can help when optimizing build times
      * @method init
      * @type Function
    */

    init: function (grunt) {

      this.grunt = grunt;

      require('es6-promise')
        .polyfill();

      require('jit-grunt')(this.grunt, {

        'shell': 'grunt-shell-spawn'

      });

      require('time-grunt')(this.grunt);

      return this;

    },

    /**
      * Configure grunt plugins
      * @method config
      * @type Function
    */

    config: function () {

      var grunt = this.grunt;

      grunt.initConfig({

          'pkg': grunt.file.readJSON('package.json'),

          'paths' : require('./grunt/paths'),

          'shell': require('./grunt/shell'),

          'jshint': require('./grunt/jshint'),

          'copy' : require('./grunt/copy'),

          'compass': require('./grunt/compass'),

          'watch' : require('./grunt/watch'),

          'clean' : require('./grunt/clean'),

          'pug': require('./grunt/pug'),

          'ts' : require('./grunt/ts'),

          'tslint': require('./grunt/tslint'),

          'merge-json' : require('./grunt/merge-json')

      });

      return this;

    },

    /**
      * @method getOptions
      * Get command-line argument options or use defaults
    */

    getOptions : function(task) {

      var options = task.options({

        'environment': this.grunt.option('environment') || 'local',

        'open': this.grunt.option('open') || false,

        'watch': this.grunt.option('watch') || false,

        'coverage' : this.grunt.option('coverage') || false,

        'report' : this.grunt.option('report') || false,

        'server' : this.grunt.option('server') || false

      });

      return options;

    },

    /**
      * @method addTasksBasedOnOptions
      * Add tasks based on the current command line arguments
    */

    addTasksBasedOnOptions: function (opts, name, value, tasks, add) {

      if(opts[name] === value) {

        tasks.push(add);

      }

      return _.flatten(tasks);

    },

    /**
      * @method tasks
      * Build tasks for build, test, serve, and running the application.
    */

    tasks: function () {

      var self = this,

          grunt = self.grunt;

      self
        .msg('         #@  `@`        ')
        .msg('         #@  `@`        ')
        .msg('        ,@@@@@@\'        ')
        .msg('       @@@@@@@@@@       ')
        .msg('      @@@#@  `@@@@      ')
        .msg('      @@ #@  `@ @@;     ')
        .msg('      @@ #@  `@`,@@     ')
        .msg('      @@ #@  `@` \'\'     ')
        .msg('      @@+#@  `@`        ')
        .msg('      .@@@@. `@`        ')
        .msg('       `@@@@@@@,        ')
        .msg('         #@@@@@@@.      ')
        .msg('         #@  `@@@@,     ')
        .msg('         #@  `@`\'@@     ')
        .msg('     @@  #@  `@` @@:    ')
        .msg('     @@` #@  `@` @@;    ')
        .msg('     +@@ #@  `@` @@`    ')
        .msg('      @@@#@  `@`@@@     ')
        .msg('      `@@@@;:\'@@@@      ')
        .msg('        @@@@@@@@@       ')
        .msg('         #@#@#@`        ')
        .msg('         #@  `@`        ')
        .msg('         ;;   ;         ');

      grunt.registerTask('build', function (target) {

        var options = self.getOptions(this);

        var tasks = [

          'buildPug',

          'buildJs',

          'buildTs',

          'buildStyles',

          'buildAssets',

          'merge-json:all'

        ];

        if(target !== 'automated') {

          tasks = self.addTasksBasedOnOptions(options, 'open', true, tasks, ['open:app']);

        }

        grunt.task.run(tasks);

      });

      grunt.registerTask('buildAssets', function () {

        grunt.task.run([

          'copy:images',

          'copy:fonts'

        ]);

      });

      grunt.registerTask('buildTs', function () {

        grunt.task.run([

          'tslint:app',

          'ts:app',

          'clean:baseDirApp'

        ]);

      });

      grunt.registerTask('buildJs', function (rebuild) {

        grunt.task.run([

          'clean:js',

          'copy:scripts'

        ]);

        if (rebuild === 'rebuildAll') {

          grunt.task.run([

            'buildTs'

          ]);

        }

      });

      grunt.registerTask('buildPug', function () {

        grunt.task.run([

          'clean:pug',

          'pug'

        ]);

      });

      grunt.registerTask('buildStyles', function () {

        grunt.task.run([

          'clean:styles',

          'compass:server',

          'copy:styles'

        ]);

      });

      grunt.registerTask('serve', function () {

        grunt.task.run([

          'build',

          'sync',

          'watch'

        ]);

      });

      grunt.registerTask('sync', function () {

        grunt.task.run([

          (process.platform === 'win32') ?

            'shell:winRun' : 'shell:shRun'

        ]);

      });

      grunt.registerTask('rebuild', function () {

        grunt.task.run([

          'build',

          (process.platform === 'win32') ?

            'shell:winRebuildRun' : 'shell:shRebuildRun'

        ]);

      });

      return self;

    }

  };

  pkg
    .init(grunt)
    .config()
    .tasks();

};
