<template>
  <div class="footer-container">
    <div class="footer-inner">
      <div class="footer-content">
        <FooterCntJp />
        <FooterCntEn />
        <div class="footer-meta-wrapper" />
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
    margin-bottom: 20px;
}
.footer-inner {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.footer-meta-wrapper {
  width: 40%;
}
.footer-content {
    font-size: 10px;
    margin-bottom: 70px;
    display: flex;
    justify-content: space-between;
}
</style>