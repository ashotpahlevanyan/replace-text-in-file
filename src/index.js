const replaceFontPaths = require('./replacer');
const options = {
  files: [
    './main.css'
  ],
  from: /\/static\/media\/ManulifeJHSans/g,
  to: '/etc.clientlibs/jhi-commons-v1/clientlibs/clientlib-base/resources/',
};

replaceFontPaths(options);

