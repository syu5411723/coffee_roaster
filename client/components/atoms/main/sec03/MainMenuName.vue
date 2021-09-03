<template>
  <div>
    <p class="menu-name">{{ menu.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["menu"],
};
</script>

<style>
.menu-name {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>