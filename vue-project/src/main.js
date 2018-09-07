import Vue from 'vue'
import App from './App.vue'

Vue.filter('snippet', value => value.slice(0, 10));
new Vue({
    el: '#app',
    render: h => h(App)
});