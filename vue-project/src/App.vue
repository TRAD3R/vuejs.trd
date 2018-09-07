<template xmlns:v-colored="http://www.w3.org/1999/xhtml">
    <!-- через "|" указываются фильтры (пользовательские функции, которые возвращают строку)-->
    <div>
        <h2>{{title}}</h2>

        <h2>{{title | upperCase}}</h2>

        <h2>{{title | snippet}}</h2>

        <h2>{{title | snippet | upperCase}}</h2>


    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: 'Изучаем фильтры',
            }
        },
        filters: {
            upperCase(value) {
                return value.toUpperCase();
            }
        }
    }
</script>