var path = require('path');

const defaultLocale = 'en-US';

module.exports = require('apostrophe')({
  root: module,
  shortName: 'apostrophe-boilerplate-2',
  modules: {

    'apostrophe-db': {
      connect: {
        useUnifiedTopology: true
      }
    },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-i18n': {
      namespaces: true
    },
    'apostrophe-i18n-static': {
      defaultLocale,
      // objectNotation: true,
      disableLocaleChange: true,
      ignoreNamespaces: [ 'apostrophe' ],
      locales: [
        {
          label: 'English',
          value: 'en-US',
        },
        {
          label: 'Spanish',
          value: 'es-ES',
        },
        {
          label: 'French',
          value: 'fr-FR',
        },
        {
          label: 'German',
          value: 'de-DE',
        },
        {
          label: 'Austrian',
          value: 'de-AT',
        },
        {
          label: 'Swiss',
          value: 'de-CH',
        },
      ]
    }
  }
});
