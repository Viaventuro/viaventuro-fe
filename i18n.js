const { locales, defaultLocale } = require('./src/locales');

module.exports = {
  locales: locales,
  defaultLocale: defaultLocale,
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) => import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};