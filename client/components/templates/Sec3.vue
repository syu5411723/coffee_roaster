<template>
  <section class="sec03-container">
    <div class="sec03-inner">
      <div class="mainMenu-wrapper">
        <sec-title text="Menu" />
        <main-menu :menus="menus" />
      </div>
      <div class="subMenu-wrapper">
        <sub-menu :otherMenus="otherMenus" />
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
  props: ['menus', 'otherMenus'],
};
</script>

<style>
.sec03-container {
  padding-bottom: 150px;
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

</style>