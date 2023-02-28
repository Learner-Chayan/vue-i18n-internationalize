import { createI18n } from 'vue-i18n'
import ln from './langulage'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {},
    fr: {}
  }
})

// Load the messages from a JSON file
import(`./locales/en.json`).then((messages) => {
  i18n.global.setLocaleMessage('en', messages.default)
})

import(`./locales/fr.json`).then((messages) => {
  i18n.global.setLocaleMessage('fr', messages.default)
})

export default i18n