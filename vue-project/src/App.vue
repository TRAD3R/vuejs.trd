<template>
    <div id="app">
        <h2>Parent: {{name}}</h2>
        <app-pizza :pizzaName="name" :pizzaPrice="price" @nameChanged="name = $event" :changeFunc="changeNameToPizza"></app-pizza>
    </div>
</template>

<script>
    import Pizza from './Pizza.vue';
    export default {
        data(){
            return {
                name: 'Деревенская',
                price: 250
            }
        },
        methods: {
            changeNameToPizza(){
                this.name = 'Pizza'
            }
        },
        components: {
            appPizza: Pizza
        }
    }
</script>