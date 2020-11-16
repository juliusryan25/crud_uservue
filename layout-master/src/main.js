// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./store";
import VueApexCharts from 'vue-apexcharts'
import Raphael from 'raphael/raphael'
import VueVectorMap from 'vuevectormap'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VuejsDatatableFactory } from 'vuejs-datatable';
import VueGoodTablePlugin from 'vue-good-table';

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin); 
Vue.use( VuejsDatatableFactory )
global.Raphael = Raphael;

import { Datetime } from 'vue-datetime';
 
Vue.component('datetime', Datetime);
// Vue.component('vue-datetime', window.VueDatetime.Datetime);

import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('apexchart', VueApexCharts)

import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);

// Import your preferred map
require('jsvectormap/dist/maps/world')

Vue.use(VueApexCharts)
Vue.use(VueVectorMap)

// You can set defaults globally
Vue.use(VueVectorMap, {
  map: 'world',
  backgroundColor: 'orange',
  // And so on..
  // check the jsvectormap repo to get all configurations options..
})

Vue.use(VueApexCharts)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
