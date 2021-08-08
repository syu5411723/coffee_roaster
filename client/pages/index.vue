<template>
  <body>
    <Home />

  </body>
</template>

<script>
import Home from "../components/pages/Home.vue";

export default {
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
body {
  letter-spacing:0.04rem;
}
</style>
