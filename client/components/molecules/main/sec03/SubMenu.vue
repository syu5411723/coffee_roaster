<template>
  <div>
    <template v-for="otherMenu in otherMenus"> 
      <div :key="otherMenu.id">
        <sub-menu-name :otherMenu="otherMenu"></sub-menu-name>
        <sub-menu-select :otherMenu="otherMenu"></sub-menu-select>
        <sub-menu-info :otherMenu="otherMenu"></sub-menu-info>
      </div>
    </template>
  </div>
</template>

<script>
import SubMenuInfo from "../../../atoms/main/sec03/SubMenuInfo.vue";
import SubMenuName from "../../../atoms/main/sec03/SubMenuName.vue";
import SubMenuSelect from "../../../atoms/main/sec03/SubMenuSelect.vue";
export default {
  components: {
    SubMenuName,
    SubMenuSelect,
    SubMenuInfo
  },
  props: ["otherMenus"],
};
</script>

<style>
</style>