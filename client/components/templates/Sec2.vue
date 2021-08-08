<template>
  <section class="sec02">
    <div class="sec02-container">
      <div class="sec02-inner">
        <sec-02-content />
      </div>
    </div>
  </section>
</template>

<script>
import Sec02Content from "../molecules/main/sec02/Sec02Content.vue";
export default {
  components: { Sec02Content },
};
</script>

<style>
.sec02 {
  width: 100%;
  height: 100vh;
  background-color: #edece7;
}
.sec02-container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.sec02-inner {
  width: 100%;
  height: 80%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
</style>

