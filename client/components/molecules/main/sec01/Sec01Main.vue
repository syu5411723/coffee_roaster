<template>
    <div class="sec01-main">
        <Sec01Title/>
        <Sec01Date/>
        <Sec01Image />
    </div>
</template>

<script>
import Sec01Date from '../../../atoms/main/sec01/Sec01Date.vue'
import Sec01Image from '../../../atoms/main/sec01/Sec01Image.vue'
import Sec01Title from '../../../atoms/main/sec01/Sec01Title.vue'
export default {
    components: {
        Sec01Image,
        Sec01Title,
        Sec01Date,
    }
}
</script>

<style>
.sec01-main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
</style>