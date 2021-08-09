<template>
  <section class="sec02">
    <div class="sec02-container">
      <div class="sec02-inner">
        <sec-02-content />
        <sec-02-img />
      </div>
    </div>
  </section>
</template>

<script>
import Sec02Content from "../molecules/main/sec02/Sec02Content.vue";
import Sec02Img from "../molecules/main/sec02/Sec02Image.vue";
export default {
  components: { Sec02Content, Sec02Img },
};
</script>

<style>
.sec02 {
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  padding-bottom: 200px;
}
.sec02-container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.sec02-inner {
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

