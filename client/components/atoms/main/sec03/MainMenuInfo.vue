<template>
  <div class="menu-info-wrapper">
    <p class="menu-size">{{ menu.size }} </p>
    <p class="menu-price"> {{ menu.price }}</p>
  </div>
</template>

<script>
export default {
  props: ["menu"],
};
</script>

<style>
.menu-info-wrapper {
  display: flex;
}
.menu-name {
  margin-top: 5px;
}
</style>