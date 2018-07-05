// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'
import store from './store/store'
import vuexaxi from 'vue-axios'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale });
Vue.use(Vuex);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
    Axios,
    vuexaxi,
    store,
  components: { App },
  template: '<App/>'
})
