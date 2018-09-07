<template>
    <div id="app">
        <app-pizza pizzaName="Деревенская">
            <h1 slot="title">{{pizzaName}}</h1>
            <p slot="text">Пицца Деревенская</p>
        </app-pizza>
    </div>
</template>

<script>
    import Pizza from './Pizza.vue';
    export default {
        components: {
            appPizza: Pizza,
        }
    }
</script>