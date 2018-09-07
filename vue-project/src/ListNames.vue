<template>
    <div>
        <h2>ListNames</h2>

        <input type="text" v-model="search">

        <ul>
            <li v-for="name of filtered" :key="name">{{name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>