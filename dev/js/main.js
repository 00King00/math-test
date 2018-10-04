import Vue from 'vue'
//import App from '../App.vue'
import AppConfig from '../App-config.vue'
//import AppStartScreen from '../components/start-screen.vue'
//import AppQuestion from '../components/question.vue'
//import AppMasage from '../components/masage.vue'
//import AppResultScreen from '../components/result-screen.vue'

//Vue.component('AppStartScreen', AppStartScreen);
//Vue.component('AppQuestion', AppQuestion);
//Vue.component('AppMasage', AppMasage);
//Vue.component('AppResultScreen', AppResultScreen);

import NextConfig from '../components/next-config.vue'
Vue.component('NextConfig', NextConfig);


const vm1= new Vue({
	el: '#app-config',
	render: h => h(AppConfig)
	
	

})
