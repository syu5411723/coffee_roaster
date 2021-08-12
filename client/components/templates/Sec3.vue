<template>
  <section class="sec03-container">
    <div class="sec03-inner">
      <div class="mainMenu-wrapper">
        <sec-title text="Menu" />
        <main-menu :menus="menus" />
      </div>
      <div class="other-menu-wrapper">
        <div class="other-menu-inner">
          <p class="other-menu-title">Other Menu</p>
          <sub-menu :otherMenus="otherMenus" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SecTitle from "../atoms/design/SecTitle.vue";
import MainMenu from "../molecules/main/sec03/MainMenu.vue";
import SubMenu from "../molecules/main/sec03/SubMenu.vue";
export default {
  components: { MainMenu, SubMenu, SecTitle },
  props: ["menus", "otherMenus"],
};
</script>

<style>
.sec03-container {
}
.sec03-inner {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.mainMenu-wrapper {
  display: flex;
  justify-content: space-between;
}
.other-menu-wrapper {
  display: flex;
  justify-content: flex-end;
}
.other-menu-inner {
  width:70%
}
.other-menu-title {
  border-bottom: 1px solid #333;
}
</style>