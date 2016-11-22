import Vue from 'vue'
import VueRouter from 'vue-router'

console.log('NODE_ENV:', process.env.NODE_ENV)

import highlight from './directives/highlight.js'

let VuemanticUI

if (process.env.NODE_ENV === 'development') {
  VuemanticUI = require('../src/index')
} else {
  VuemanticUI = require('../dist/vuemantic-ui')
}

Vue.use(VueRouter)
Vue.use(VuemanticUI)
Vue.component('example', require('./components/example.vue'))
Vue.directive('highlight', highlight)

const App = Vue.extend({})

const router = new VueRouter({
  hashbang: true,
  history: false,
  linkActiveClass: 'active'
})

router.map(require('./routes'))
router.beforeEach(({to, next}) => {
  console.log('----->', to.name)
  next()
})

router.start(App, '#app')
