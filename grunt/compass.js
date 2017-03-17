'use strict';

module.exports = {

  'options': {

      'sassDir': '<%= paths.src %>/',

      'cssDir': '<%= paths.dist %>/',

      'imagesDir': '<%= paths.dist %>/<%= paths.images %>',

      'javascriptsDir': '<%= paths.dist %>/<%= paths.scripts %>',

      'fontsDir': '<%= paths.dist %>/<%= paths.styles %>/fonts',

      'importPath': './node_modules/',

      'httpFontsPath': '<%= paths.dist %>/<%= paths.styles %>/fonts',

      'relativeAssets': false,

      'assetCacheBuster': false,

      'raw': 'Sass::Script::Number.precision = 10\n'

  },

  'server': {

      'options': {

          'debugInfo': false

      }

  }

};
