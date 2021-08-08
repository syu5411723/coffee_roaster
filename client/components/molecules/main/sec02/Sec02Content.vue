<template>
  <div class="sec02-contentWrapper">
    <div class="sec02-contentInner">
      <Sec02ContentEn />
      <Sec02ContentJp />
    </div>
  </div>
</template>

<script>
import Sec02ContentEn from "../../../atoms/main/sec02/Sec02ContentEn.vue";
import Sec02ContentJp from "../../../atoms/main/sec02/Sec02ContentJp.vue";
export default {
  components: {
    Sec02ContentJp,
    Sec02ContentEn,
  },
};
</script>

<style>
.sec02-contentWrapper {
    width:55%;
    height: 80%;
}
.sec02-contentInner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
</style>