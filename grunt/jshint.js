'use strict';

module.exports = {

  'options': {

    'jshintrc': '.jshintrc',

    'reporter': require('jshint-stylish')

  },

  'all': [

    'Gruntfile.js',

    '<%= paths.src %>/<%= paths.scripts %>/**/*.js'

  ]

};
