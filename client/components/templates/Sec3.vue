<template>
  <section class="sec03-container">
    <div class="sec03-inner">
      <div class="mainMenu-wrapper">
        <sec-title text="Menu" />
        <div id="main-menu-trigger">
          <main-menu :menus="menus" />
        </div>
      </div>
      <div class="other-menu-wrapper" id="other-menu-trigger">
        <div class="other-menu-inner">
          <p class="other-menu-title" id="other-menu-title">Other Menu</p>
          <div id="other-menu-content-wrapper">
            <sub-menu :otherMenus="otherMenus" />
          </div>
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
  mounted() {
    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: "#other-menu-trigger",
        triggerHook: 0.8,
      })
      .setTween("#other-menu-title", {
        css: {
          opacity: "1",
          transform: "translateY(0)",
          transition: "ease-in",
        },
      });
    const scene3 = this.$scrollmagic
      .scene({
        triggerElement: "#other-menu-trigger",
        triggerHook: 0.6,
      })
      .setTween("#other-menu-content-wrapper", {
        css: {
          opacity: "1",
          transform: "translateX(0)",
          transition: "ease-in",
        },
      });
      const scene4 = this.$scrollmagic
      .scene({
        triggerElement: "#main-menu-trigger",
        triggerHook: 0.8
      })
      .setTween("#main-menu-trigger", {
        css: {
          opacity: "1",
          transform: "translateY(0)",
          transtion: "ease-in",
        }
      })

    this.$scrollmagic.addScene(scene2);
    this.$scrollmagic.addScene(scene3);
    this.$scrollmagic.addScene(scene4);
  },
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
#main-menu-trigger {
  opacity: 0;
  transform: translateY(60px);
  width: 70%;
  display: flex;
  justify-content:flex-end;
}
.other-menu-wrapper {
  display: flex;
  justify-content: flex-end;
}
.other-menu-inner {
  width: 70%;
}
#other-menu-title {
  border-bottom: 1px solid #333;
  opacity: 0;
  transform: translateY(100px);
  font-size: 18px;
  padding-bottom: 10px;
}
#other-menu-content-wrapper {
  opacity: 0;
  transform: translateX(100px);
}
</style>