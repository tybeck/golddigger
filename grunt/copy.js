'use strict';

module.exports = {

  'scripts': {

    'files': [

      {

        'expand': true,

        'cwd': '<%= paths.src %>/<%= paths.scripts %>/',

        'dest': '<%= paths.dist %>/<%= paths.scripts %>/',

        'src': '**/*.js'

      }

    ]

  },

  'images': {

    'files': [

      {

        'expand': true,

        'dot': true,

        'cwd': '<%= paths.src %>/<%= paths.images %>/',

        'dest': '<%= paths.dist %>/<%= paths.images %>/',

        'src': '**/*.{webp,gif,png,jpg}'

      }

    ]

  },

  'fonts': {

    'files': [

      {

        'expand': true,

        'dot': true,

        'cwd': '<%= paths.src %>/<%= paths.styles %>/<%= paths.fonts %>/',

        'dest': '<%= paths.dist %>/<%= paths.styles %>/<%= paths.fonts %>/',

        'src': '{,*/}*.{eot,svg,ttf,woff,woff2}'

      }

    ]

  },

  'styles': {

    'files': [

      {

        'expand': true,

        'dot': true,

        'cwd': '<%= paths.src %>/',

        'dest': '<%= paths.dist %>/',

        'src': '**/*.css'

      }

    ]

  }

};
