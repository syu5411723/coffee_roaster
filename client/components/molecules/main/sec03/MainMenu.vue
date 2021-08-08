<template>
  <div>
    <main-menu-img />
    <main-menu-name />
    <main-menu-info />
  </div>
</template>

<script>
import MainMenuImg from "../../../atoms/main/sec03/MainMenuImg.vue";
import MainMenuInfo from "../../../atoms/main/sec03/MainMenuInfo.vue";
import MainMenuName from "../../../atoms/main/sec03/MainMenuName.vue";
export default {
  components: { MainMenuName, MainMenuImg, MainMenuInfo },
};
</script>

<style>
</style>