<template>
  <div class="footer-container">
    <div class="footer-inner">
    <div id="footer-title">Location</div>
      <div class="footer-content" id="footer-trigger">
        <FooterCntJp />
        <FooterCntEn />
      </div>
      <FooterBootom />
    </div>
  </div>
</template>

<script>
import FooterCntEn from "../atoms/footer/FooterCntEn";
import FooterCntJp from "../atoms/footer/FooterCntJp";
import FooterBootom from "../atoms/footer/FooterBottom.vue";
export default {
  components: {
    FooterCntJp,
    FooterCntEn,
    FooterBootom,
  },
  mounted() {
    const scene = this.$scrollmagic
    .scene({
      triggerElement: "#footer-title",
      triggerHook: 0.7,
    })
    .setTween("#footer-trigger", {
      css:{
        opacity: "1",
        transform: "translateX(0)",
        transition: "ease all 0.5s",
      }
    });
    this.$scrollmagic.addScene(scene);
  }
};
</script>

<style>
.footer-container {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
}
.footer-inner {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
#footer-trigger {
  transform: translateX(-50px);
  opacity: 0;
}
#footer-title {
  margin-bottom: 30px;
}
.footer-meta-wrapper {
  width: 40%;
}
.footer-content {
    font-size: 10px;
    margin-bottom: 70px;
    display: flex;
    width: 100%;
}
</style>