<template>
  <div>
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
}
</style>