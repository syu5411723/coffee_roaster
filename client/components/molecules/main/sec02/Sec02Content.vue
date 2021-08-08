<template>
  <div class="sec02-contentWrapper">
      <Sec02ContentEn />
      <Sec02ContentJp />
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
  width: 55%;
  height: 80%;
    font-size: 10px;
  font-weight: 100;
}
</style>