<template>
    <div id="app">
        <h2>Parent: {{name}}</h2>
        <app-pizza :pizzaName="name" :pizzaPrice="price" @nameChanged="name = $event"></app-pizza>
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
        components: {
            appPizza: Pizza
        }
    }
</script>