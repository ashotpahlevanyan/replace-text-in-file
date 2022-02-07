#! /usr/bin/env node

const replace = require('replace-in-file');

const localOptions = {
  files: [
    './test/main.css'
  ],
  from: /\/static\/media\/ManulifeJH/g,
  to: '/etc.clientlibs/jhi-rps-planmanager/clientlibs/clientlib-planmanager/resources/ManulifeJH',
};

const defaultOptions = {
  files: [
    './build/static/css/*.css'
  ],
  from: /\/static\/media\/ManulifeJH/g,
  to: '/etc.clientlibs/jhi-rps-planmanager/clientlibs/clientlib-planmanager/resources/ManulifeJH',
};

function replaceFontPaths(options = defaultOptions) {
  replace(options).then((res) => {
    console.log(`Done: ${JSON.stringify(res)}`)
  }).catch((e) => {
    console.log(`Error replacing fonts: ${e}`)
  });
}

replaceFontPaths();

// with Hash removal :
// from: /\/static\/media\/ManulifeJH([a-zA-Z0-9_-]*).([a-zA-Z0-9]*).([a-zA-Z0-9]*)/g,
// to: '/etc.clientlibs/jhi-rps-planmanager/clientlibs/clientlib-planmanager/resources/ManulifeJH$1.$3',
