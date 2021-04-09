'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  BASE_API: '"http://127.0.0.1:8222/"',
  BASE_API_VOD: '"http://127.0.0.1:8003/"',
  BASE_API_IMG: '"http://127.0.0.1:8002/"',
  BASE_API_EXCL: '"http://127.0.0.1:8001/"',
  // BASE_API: '"http://localhost:9001/"',
})
