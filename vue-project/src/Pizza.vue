<template>
    <div>
        <h2>{{pizzaName}} / {{reverse}}</h2>
        <p>{{pizzaPrice}}</p>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc">Change from parent</button>
    </div>
</template>

<script>
    export default {
        props: ['pizzaName', 'pizzaPrice', 'changeFunc'],
        data() {
            return {
                pizzaName: 'Маргарита',
                pizzaPrice: 300
            }
        },
        methods: {
            changeName: function () {
                this.pizzaName = 'Гавайская';
                this.$emit('nameChanged', this.pizzaName);
            }
        },
        computed: {
            reverse: function () {
                return this.pizzaName.split('').reverse().join('');
            }
        }
    }
</script>