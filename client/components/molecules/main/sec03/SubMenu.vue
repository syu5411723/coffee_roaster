<template>
  <div>
    <template v-for="otherMenu in otherMenus">
      <div :key="otherMenu.id" class="other-menu-lists">
        <div class="other-menu-left">
          <sub-menu-left :otherMenu="otherMenu" />
        </div>
        <div class="other-menu-center">
          <sub-menu-center :otherMenu="otherMenu" />
        </div>
        <div class="other-menu-right">
          <sub-menu-right :otherMenu="otherMenu" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import SubMenuCenter from "../../../atoms/main/sec03/SubMenuCenter.vue";
import SubMenuRight from "../../../atoms/main/sec03/SubMenuRight.vue";
import SubMenuLeft from "../../../atoms/main/sec03/SubMenuLeft.vue";

export default {
  components: {
    SubMenuCenter,
    SubMenuRight,
    SubMenuLeft,
  },
  props: ["otherMenus"],
};
</script>

<style>
.other-menu-lists {
  margin-top: 15px;
  width: 100%;
  height: 10vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.other-menu-left {
  width: 33.3%;
}
.other-menu-center {
  width: 33.3%;
}
.other-menu-right {
  width: 33.3%;
}
</style>