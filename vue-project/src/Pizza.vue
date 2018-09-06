<template>
    <div>
        <h2>Pizza name: {{pizzaName}}</h2>
        <p>Pizza price: {{pizzaPrice}}</p>
    </div>
</template>

<script>
    export default {
        name: "Pizza",
        props: ['pizzaName', 'pizzaPrice']
    }
</script>

<style scoped>

</style>