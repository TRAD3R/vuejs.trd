import Vue from 'vue'
import App from './App.vue'
import ListNames from './ListNames'
import ListMixin from './ListMixin'

Vue.component('list-name', ListNames);
Vue.mixin(ListMixin)

new Vue({
    el: '#app',
    render: h => h(App)
});