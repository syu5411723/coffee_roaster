<template>
  <div class="main-menu-conrainer">
    <template v-for="menu in limitCount">
      <div :key="menu.id">
        <div class="main-menu-img-wrapper">
          <main-menu-img :menu="menu" />
        </div>
        <main-menu-name :menu="menu" />
        <main-menu-info :menu="menu"></main-menu-info>
      </div>
    </template>
  </div>
</template>

<script>
import MainMenuImg from "../../../atoms/main/sec03/MainMenuImg.vue";
import MainMenuInfo from "../../../atoms/main/sec03/MainMenuInfo.vue";
import MainMenuName from "../../../atoms/main/sec03/MainMenuName.vue";

export default {
  head() {
    return {
      title: "coffee",
    };
  },
  components: {
    MainMenuName,
    MainMenuImg,
    MainMenuInfo,
  },
  props: ["menus"],
  computed: {
    limitCount() {
      return this.menus.slice(0, 3);
    },
  },
};
</script>

<style>
.main-menu-conrainer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.main-menu-img-wrapper {
  width: 95%;
  position: relative;
}
.sub-menu-conrainer {
  text-align: left;
}
</style>