<template>
  <div>
    <h3 class="sub-menu-name">{{ otherMenu.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ["otherMenu"],
};
</script>

<style>
.sub-menu-name {
  font-size: 16px;
  font-weight: 400;
}
</style>