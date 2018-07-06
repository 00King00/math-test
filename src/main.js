import Vue from 'vue'
import App from './App.vue'
import AppStartScreen from './components/start-screen.vue'

import AppQuestion from './components/question.vue'
import AppMasage from './components/masage.vue'
import AppResultScreen from './components/result-screen.vue'

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppMasage', AppMasage);
Vue.component('AppResultScreen', AppResultScreen);


new Vue({
  el: '#app',
  render: h => h(App)
})
