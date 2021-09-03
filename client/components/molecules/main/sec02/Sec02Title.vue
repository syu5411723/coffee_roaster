<template>
  <div id="title-trigger">
    <div id="sec02-title-wrapper">
      <Sec02SubThumb />
      <Sec02Thumb />
    </div>
  </div>
</template>

<script>
import Sec02Thumb from "../../../atoms/main/sec02/Sec02Thumb.vue";
import Sec02SubThumb from "../../../atoms/main/sec02/Sec02SubThumb.vue";
export default {
  components: {
    Sec02Thumb,
    Sec02SubThumb,
  },
  mounted() {
    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: "#title-trigger",
        triggerHook: 0.7,
      })
      .setTween("#title-trigger", {
        css: {
          opacity: "0",
          left: "-10%",
            transition: "ease-in",
        },
      });
    this.$scrollmagic.addScene(scene2);
  },
};
</script>

<style scoped>
#title-trigger {
  opacity: 1;
  position: absolute;
  top: 45%;
  left: 10%;
}
#sec02-title-wrapper {
}
</style>
