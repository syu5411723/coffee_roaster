<template>
    <section class="sec04">
        <div class="sec04-inner">
            <div class="sec04-top">
                <sec-04-text />
                <sec-04-img />
            </div>
            <div class="sec04-bottom">
                <from-online />
            </div>
        </div>
    </section>
</template>
<script>
import FromOnline from '../molecules/main/sec04/FromOnline.vue'
import Sec04Img from '../molecules/main/sec04/Sec04Img.vue'
import Sec04Text from '../molecules/main/sec04/Sec04Text.vue'
export default {
  components: { Sec04Text, Sec04Img, FromOnline },
    
}
</script>


<style>
.sec04{

}
.sec04-inner {

}
.sec04-top {
    display: flex;
    justify-content: space-between;
}
.sec04-bottom {

}
</style>
