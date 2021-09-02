<template>
  <section class="sec04">
    <div class="sec04-inner">
      <div class="sec04-top">
        <div class="sec04-top-left">
          <sec-title text="Shop" />
          <div id="sec04-text-trigger">
            <sec-04-text />
          </div>
        </div>
        <div class="sec04-top-right" id="image-trigger">
          <div class="sec04-top-right-inner">
            <sec-04-img />
            <sec-04-img-02 />
          </div>
        </div>
      </div>
      <div class="sec04-bottom">
        <from-online />
      </div>
    </div>
  </section>
</template>
<script>
import SecTitle from "../atoms/design/SecTitle.vue";
import {
  Sec04Img,
  Sec04Text,
  FromOnline,
  Sec04Img02,
} from "~/components/molecules/main/sec04";

export default {
  components: {
    Sec04Text,
    Sec04Img,
    FromOnline,
    SecTitle,
    Sec04Img02,
    Sec04Img02,
  },
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#sec04-text-trigger",
        triggerHook: 0.65,
      })
      .setTween("#sec04-text-trigger", {
        css: {
          opacity: "1",
          transition: "ease-in",
        },
      });
    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: "#image-trigger",
        triggerHook: 0.8,
      })
      .setTween("#image-trigger", {
        css: {
          opacity: "1",
          transform: "translateY(0)",
          transition: "ease-in"
        }
      })
      this.$scrollmagic.addScene(scene1);
      this.$scrollmagic.addScene(scene2)
  },
};
</script>


<style>
.sec04 {
  padding-top: 27vw;
}
.sec04-inner {
}
.sec04-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: (20vw + 5px);
}
#sec04-text-trigger {
  opacity:0;
  
}
.sec04-top-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  margin-left: 2.5vw;
}
.sec04-top-right {
  width: 70%;
}
.sec04-top-right-inner {
  width: 100%;
  display: flex;
}
#image-trigger {
  opacity: 0;
  transform: translateY(50px);
}
.sec04-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10vw;
}
</style>
