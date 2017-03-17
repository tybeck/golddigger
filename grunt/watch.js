'use strict';

module.exports = {

  'pug': {

    'files': [
      '<%= paths.src %>/<%= paths.templates %>/**/*.pug'
    ],

    'tasks': [
      'rebuild'
    ]

  },

  'js': {

    'files': [
      '<%= paths.src %>/<%= paths.scripts %>/**/*.js'
    ],

    'tasks': [
      'rebuild'
    ]

  },

  'ts': {

    'files': [
      '<%= paths.src %>/<%= paths.scripts %>/**/*.ts'
    ],

    'tasks': [
      'rebuild'
    ]

  },

  'compass': {

    'files': [
      '<%= paths.src %>/<%= paths.styles %>/**/*.{scss,sass}'
    ],

    'tasks': [
      'rebuild'
    ]

  }

};
