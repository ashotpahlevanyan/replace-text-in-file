#! /usr/bin/env node

const replace = require('replace-in-file');

const localOptions = {
  files: [
    './main.css'
  ],
  from: /\/static\/media\/ManulifeJHSans/g,
  to: '/etc.clientlibs/jhi-commons-v1/clientlibs/clientlib-base/resources/',
};

const defaultOptions = {
  files: [
    './build/static/css/*.css'
  ],
  from: /\/static\/media\/ManulifeJH/g,
  to: '/etc.clientlibs/jhi-commons-v1/clientlibs/clientlib-base/resources/ManulifeJH',
};

function replaceFontPaths(options = defaultOptions) {
  replace(options).then((res) => {
    console.log(`Done: ${JSON.stringify(res)}`)
  }).catch((e) => {
    console.log(`Error replacing fonts: ${e}`)
  });
}

replaceFontPaths();
