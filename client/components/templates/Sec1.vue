<template>
  <section class="sec01">
    <div class="sec01-container">
      <div class="sec01-inner">
        <Sec01Main />
        <Sec01Bottom />
      </div>
    </div>
  </section>
</template>

<script>
import Sec01Main from "../molecules/main/sec01/Sec01Main.vue";
import Sec01Bottom from "../molecules/main/sec01/Sec01Bottom.vue";
export default {
  components: {
    Sec01Main,
    Sec01Bottom,
  },
};
</script>

<style>
.sec01 {
  width: 100%;
  height: 100vh;
  background-color: #242f42;
  color: #fff;
  position: relative;
}
.sec01-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.sec01-inner {
  width: 97%;
  height: 100%;
}
</style>