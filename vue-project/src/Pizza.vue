<template>
    <div>
        <h2>Pizza name: {{pizzaName}}</h2>
        <p>Pizza price: {{pizzaPrice}}</p>
    </div>
</template>

<script>
    export default {
        name: "Pizza",
        data(){
            return{
                pizzaName: "Деревенская",
                pizzaPrice: 320
            }
        }
    }
</script>

<style scoped>

</style>