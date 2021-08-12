<template>
  <section class="sec04">
    <div class="sec04-inner">
      <div class="sec04-top">
        <div class="sec04-top-left">
          <sec-title text="Shop" />
          <sec-04-text />
        </div>
        <div class="sec04-top-right">
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
.sec04-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10vw;
}
</style>
