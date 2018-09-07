<template>
    <div>
        <h2>{{pizzaName}} / {{reverse}}</h2>
        <p>{{pizzaPrice}}</p>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc">Change from parent</button>
        <button @click="updateCounter">Update counter</button>
    </div>
</template>

<script>
    import {eventEmitter} from "./main";

    export default {
        props: ['pizzaName', 'pizzaPrice', 'changeFunc'],
        data() {
            return {
                pizzaName: 'Маргарита',
                pizzaPrice: 300,
                count: 0
            }
        },
        methods: {
            changeName: function () {
                this.pizzaName = 'Гавайская';
                this.$emit('nameChanged', this.pizzaName);
            },
            updateCounter: function () {
                eventEmitter.$emit('counterUpdated', 3);
            }
        },
        computed: {
            reverse: function () {
                return this.pizzaName.split('').reverse().join('');
            }
        }
    }
</script>