import Vue from 'vue'
// import App from './App.vue'

/*
 * Vue.component (компонент) - переиспользуемый экземпляр vue
 * data должен быть в виде функции
 *
 * Это глобальный компонент
 */
Vue.component('my_counter', {
    template: `
        <div>
            <h2>Счетчик: {{counter}}</h2>
            <button @click="counter++">+1</button>
        </div>
        `,
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        add: function () {
            this.counter++;
        }
    }
});
new Vue({
    el: '#app',
  // render: h => h(App)
});

/*
 * Локальный компонент
 * имя компонента (ключ) записывается либо в кавычках с "-" между словами
 * либо в "верблюжьем" стиле (Vue сам изменит на правильную HTML нотацию)
 */
var component = {
    template: `
        <div>
            <h2>Счетчик: {{counter}}</h2>
            <button @click="counter++">+1</button>
        </div>
        `,
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        add: function () {
            this.counter++;
        }
    }
};

new Vue({
    el: '#app2',
    components: {
        myCounter: component
    }
});
