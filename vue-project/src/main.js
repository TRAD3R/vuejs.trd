import Vue from 'vue'
import App from './App.vue'
import Pizza from './Pizza.vue'

export const eventEmitter = new Vue(); // позволяет пользоваться элементами, встроенными в экземпляр Vue для создания шины событий
Vue.component('app-pizza', Pizza);
new Vue({
    el: '#app',
    render: h => h(App)
});