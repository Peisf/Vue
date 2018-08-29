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
import animate from 'animate.css'

/*
* 两种使用animate方法
* （一）直接使用下载下来的css
* require('../src/assets/css/animate.css')
* html <link rel="stylesheet" href="src/assets/css/animate.css">
* （二）npm install animate.css --save   这种的需要css-loader
* import animate from 'animate.css'
* Vue.use(animate);
* */
/*
* fab && fontawesome-free-brands
* fas or fa  && fontawesome-free-solid
* far && fontawesome-free-regular
* fal && fontawesome-free-light
* */
Vue.use(animate);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
