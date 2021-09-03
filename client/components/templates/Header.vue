<template>
  <header>
    <div class="header-inner">
      <Title />
      <List />
      <Logo />
    </div>
  </header>
</template>

<script>
import Logo from "../molecules/header/Logo.vue";
import Title from "../molecules/header/Title.vue";
import List from "../molecules/header/List.vue";
export default {
  components: {
    Logo,
    List,
    Title,
  },
};
</script>

<style>
header {
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 20;
  top: 10px;
  left: 0;
  color: white;
  font-family: "Work Sans", sans-serif;
  mix-blend-mode: difference;
}
.header-inner {
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
}
</style>