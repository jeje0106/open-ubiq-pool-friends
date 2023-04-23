// import colors from 'vuetify/es5/util/colors'
import config from './params/config.json'

export default {
  server: {
    host: '192.168.8.169' // default: localhost  sudo npm run dev
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    title: config.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: config.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/' + config.favicon }],
  },
  
  //The dist folder is named dist by default but can be configured in your nuxt.config file.
  generate: {
    dir: '/var/www/etc3pool'
 },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: config.theme,
  },

  // i18n module configuration (https://i18n.nuxtjs.org/basic-usage)
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'es',
        name: 'Español',
      },
      {
        code: 'ru',
        name: 'Pусский',
      },
      {
        code: 'zh',
        name: '中文',
      },
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'core_pool_i18n_redirected',
      fallbackLocale: config.i18n.fallback || 'en',
      alwaysRedirect: true,
      onlyOnRoot: true,
    },
    defaultLocale: config.i18n.default || 'en',
    vueI18n: {
      fallbackLocale: config.i18n.fallback || 'en',
      messages: {
        en: require('./i18n/en.json'),
        es: require('./i18n/es.json'),
        ru: require('./i18n/ru.json'),
        zh: require('./i18n/zh.json'),
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // hooks
  hooks: {
    'content:file:beforeParse': (file) => {
      if (file.extension !== '.md') return
      file.data = file.data.replace(/STRATUM_HOST/g, config.stratum)
    },
  },
}
