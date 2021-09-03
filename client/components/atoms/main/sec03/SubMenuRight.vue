<template>
  <div class="sub-menu-info-wrapper">
    <p class="">{{ otherMenu.size }}</p>
    <p class="sub-menu-info">{{ otherMenu.price }}</p>
  </div>
</template>

<script>
export default {
  props: ["otherMenu"],
};
</script>

<style>
.sub-menu-info {
  margin-left: 30px;
}
.sub-menu-info-wrapper {
  display: flex;
}

</style>