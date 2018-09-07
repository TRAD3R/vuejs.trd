<template xmlns:v-colored="http://www.w3.org/1999/xhtml">
    <!-- через "|" указываются фильтры (пользовательские функции, которые возвращают строку)-->
    <div>
        <h2>{{title}}</h2>

        <input type="text" v-model="search">

        <ul>
            <li v-for="name of filtered" :key="name">{{name}}</li>
        </ul>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: 'Изучаем фильтры',
                search: '',
                names: ['Ivan', "Oleg", "Anna"]
            }
        },
        computed: {
            filtered: function () {
                return this.names.filter(name => name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
            }
        },
        filters: {
            upperCase(value) {
                return value.toUpperCase();
            }
        }
    }
</script>