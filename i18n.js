const { locales, defaultLocale } = require('./src/locales');

module.exports = {
  locales: locales,
  defaultLocale: defaultLocale,
  pages: {
    '*': ['common', 'error'],
  },
  loadLocaleFrom: (lang, ns) => require(`./src/locales/${lang}/${ns}.json`),
};
