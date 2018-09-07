import Vue from 'vue'
import App from './App.vue'
import MyDirective from './color'

export const eventEmitter = new Vue(); // позволяет пользоваться элементами, встроенными в экземпляр Vue для создания шины событий

Vue.directive('colored', MyDirective);
new Vue({
    el: '#app',
    render: h => h(App)
});