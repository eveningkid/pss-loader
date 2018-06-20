const loaderUtils = require('loader-utils');
const validate = require('@webpack-contrib/schema-utils');
const PSSParser = require('pss-lang');
const adapters = require('./adapters');

const optionSchema = {
  type: 'object',
  properties: {
    'stylingLibrary': { type: 'string' },
  },
};

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  validate({ name: 'stylingLibrary', schema: optionSchema, target: options });

  const parsedStylesheet = PSSParser.parse(source);
  let adapter;

  if (options.stylingLibrary) {
    switch (options.stylingLibrary) {
      default:
      case 'styled-components':
        adapter = adapters.styledComponentsAdapter;
        break;
    }
  }

  return adapter(parsedStylesheet);
}
