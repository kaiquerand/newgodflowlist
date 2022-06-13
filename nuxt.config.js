import dotenv from 'dotenv'
dotenv.config()

const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
})

export default {
  target: 'static',

  head: {
    title: 'newgodflow©',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/styles/app.sass'
  ],

  plugins: [
    '~/plugins/contentful'
  ],

  buildModules: [
    '@nuxtjs/dotenv'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],

  components: true
}
