<template>
  <div id="luxy">
    <Header />
    <Sec1 />
    <Sec2 />
    <Sec3 :menus="menus" :otherMenus="otherMenus" />
    <Sec4 />
    <img-wrapper />
    <Footer />
  </div>
</template>


<script>
import {
  Header,
  Footer,
  Sec1,
  Sec2,
  Sec3,
  Sec4,
  ImgWrapper,
} from "~/components/templates";

export default {
  components: {
    Header,
    Footer,
    Sec1,
    Sec2,
    Sec3,
    Sec4,
    ImgWrapper,
  },
  props: ["menus", "otherMenus"],
  name: "App",
};
</script>

<style>
</style>