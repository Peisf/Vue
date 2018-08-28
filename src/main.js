// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import '@fortawesome/fontawesome'
import '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-free-brands'
import '@fortawesome/fontawesome-free-regular'
/*
* fab && fontawesome-free-brands
* fas or fa  && fontawesome-free-solid
* far && fontawesome-free-regular
* fal && fontawesome-free-light
* */
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
