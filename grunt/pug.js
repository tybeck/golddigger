'use strict';

module.exports = {

  'compile': {

    'options': {

      'client': false,

      'pretty': true,

      'basedir': '<%= paths.src %>/<%= paths.app %>/<%= paths.templates %>/'

    },

    'files': [ {

      'cwd': '<%= paths.src %>/<%= paths.app %>/<%= paths.templates %>',

      'src': '**/*.pug',

      'dest': '<%= paths.dist %>/<%= paths.app %>/<%= paths.templates %>',

      'expand': true,

      'ext': '.html'

      },

      {

      'cwd': '<%= paths.src %>/<%= paths.app %>/',

      'src': '*.pug',

      'dest': '<%= paths.dist %>/<%= paths.app %>/',

      'expand': true,

      'ext': '.html'

      }

    ]

  }

};
