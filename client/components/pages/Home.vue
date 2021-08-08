<template>
  <div>
    <Header />
    <Sec1 />
    <Sec2 />
    <Sec3 />
    <Sec4 />
    <img-wrapper />
    <Footer />
  </div>
</template>


<script>
import Header from "../templates/Header.vue";
import Footer from "../templates/Footer.vue";
import Sec1 from '../templates/Sec1.vue'
import Sec2 from '../templates/Sec2.vue'
import Sec3 from '../templates/Sec3.vue'
import Sec4 from '../templates/Sec4.vue'
import ImgWrapper from '../templates/ImgWrapper.vue';
export default {
  components: {
    Header,
    Footer,
    Sec1,
    Sec2,
    Sec3,
    Sec4,
    ImgWrapper,
  },
};
</script>

<style>
.s {
    font-size: 100px;
}
</style>