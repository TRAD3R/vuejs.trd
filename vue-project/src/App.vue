<template xmlns:v-colored="http://www.w3.org/1999/xhtml">
    <div>
        <!--:background и :color - аргументы, которые передаются в директиву-->
        <h2 v-colored:background="'red'" v-colored:color="'green'">{{title}}</h2>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: 'Изучаем директивы',
            }
        }
    }
</script>