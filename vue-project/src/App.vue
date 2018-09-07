<template xmlns:v-colored="http://www.w3.org/1999/xhtml">
    <!-- mixin - позволяют использовать одинаковую логику в разных компонентах vue-->
    <div>
        <h2>{{title}}</h2>

        <input type="text" v-model="search">

        <ul>
            <li v-for="name of filtered" :key="name">{{name}}</li>
        </ul>

        <hr>

        <list-name></list-name>

    </div>
</template>

<script>
    import ListMixin from "./ListMixin";

    export default {
        data(){
            return {
                title: 'Изучаем фильтры',
            }
        },
        // mixin: [ListMixin]   // для локального подключения миксина
    }
</script>