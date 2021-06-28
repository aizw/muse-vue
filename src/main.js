// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import store from './store'
import App from './App'
import fastclick from 'fastclick'
import './common/stylus/index.styl'
import VueJsonp from 'vue-jsonp'
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body)

Vue.use(VueRouter)
Vue.use(VueJsonp)
Vue.use(VueLazyLoad,{
  loading:require('./common/image/default.png')
})

const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
