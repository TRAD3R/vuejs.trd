<!--<slot></slot> - используется для указания места, куда вставлять HTML из родительского Vue-->
<template>
    <div>
        <h1>{{pizzaName}}</h1>
        <slot name="title"></slot>
        <hr>
        <slot name="text"></slot>
    </div>
</template>

<script>
    export default {
        props: ['pizzaName']
    }
</script>
<!--scoped - изолирует стили-->
<style scoped>
    div{
        border: 1px solid purple;
        padding: 10px;
    }
</style>