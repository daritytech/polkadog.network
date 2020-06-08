import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-168823832-1" }
});

Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
