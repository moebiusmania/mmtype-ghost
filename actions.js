'use strict';

// Packages
const fs = require('fs-extra');

// Paths
const jsFiles = {
  orig: [
    './node_modules/promise-polyfill/dist/promise.min.js',
    './node_modules/whatwg-fetch/fetch.js'
  ],
  dest: [
    './assets/js/promise.min.js',
    './assets/js/fetch.js'
  ]
}

const fonts = {
  orig: './node_modules/font-awesome/fonts/',
  dest: './assets/fonts'
}

// Methods
const moveJS = () => {
  jsFiles.orig.forEach( (e,i) => {
    fs.copy(e, jsFiles.dest[i], (err) => {
      if (err) return console.error(`# ${err}`)
      console.log(`# Moved ${e}`);
    });
  })
}

const moveFonts = () => {
  fs.copy(fonts.orig, fonts.dest, (err) => {
    if (err) return console.error(`# ${err}`)
    console.log(`# Moved ./fonts folder`);
  });
}

// Exports
module.exports.moveJS = moveJS;
module.exports.moveFonts = moveFonts;
