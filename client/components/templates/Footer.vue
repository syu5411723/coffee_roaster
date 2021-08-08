<template>
  <div class="footer-container">
    <div class="footer-inner">
      <div class="footer-content">
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
};
</script>

<style>
.footer-container {
    width: 100%;
    height: 100%;
}
.footer-inner {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.footer-content {
    display: flex;
    justify-content: space-between;
}
</style>