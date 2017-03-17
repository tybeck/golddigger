'use strict';

module.exports = {

  'baseDirApp': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.src %>/**/*.baseDir.[jt]s*',
          '<%= paths.dist %>/**/*.baseDir.[jt]s*',
          '*.baseDir.[jt]s*'
        ]

      }

    ]

  },


  'js': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.dist %>/<%= paths.scripts%>/*'
        ]

      }

    ]

  },

  'styles': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.dist %>/<%= paths.styles %>/*'
        ]

      }

    ]

  },

  'pug': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.dist %>/**/*.html'
        ]

      }

    ]

  }

};
