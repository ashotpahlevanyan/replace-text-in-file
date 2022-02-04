const replace = require('replace-in-file');

const defaultOptions = {
  files: [
    './build/static/css/*.css'
  ],
  from: /\/static\/media\/ManulifeJH/g,
  to: '/etc.clientlibs/jhi-commons-v1/clientlibs/clientlib-base/resources/ManulifeJH',
};

module.exports = function replaceFontPaths(options = defaultOptions) {
  replace(options).then((res) => {
    console.log(`Done: ${JSON.stringify(res)}`)
  }).catch((e) => {
    console.log(`Error replacing fonts: ${e}`)
  });
};
