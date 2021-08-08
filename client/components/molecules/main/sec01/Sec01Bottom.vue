<template>
    <div class="sec01-bottomWrapper" >
        <Sec01BottomText />
    </div>
</template>

<script>
import Sec01BottomText from '../../../atoms/main/sec01/Sec01BottomText.vue'
export default {
    components: {
        Sec01BottomText,
    }
}
</script>

<style>
.sec01-bottomWrapper {
    position: absolute;
    bottom: 2%;
    left: 2%;
}
</style>