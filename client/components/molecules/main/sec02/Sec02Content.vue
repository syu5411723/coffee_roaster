<template>
  <div id="work-trigger">
    <div id="sec02-contentWrapper">
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
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#work-trigger",
        triggerHook: 0.4,
        // reverse: false,
      })
      .setTween("#sec02-contentWrapper", {
        css: {
          opacity: "1",
          transform: "translateX(50px)",
            transition: "ease-in",
        },
      });
    this.$scrollmagic.addScene(scene1);
  },
};
</script>

<style scoped>
#sec02-contentWrapper {
  width: 55%;
  height: 80%;
  font-size: 10px;
  font-weight: 100;
  opacity: 0;
  transform: translateX(20);
  transition: ease-in;
}
</style>