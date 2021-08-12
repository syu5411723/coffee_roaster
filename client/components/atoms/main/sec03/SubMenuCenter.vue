<template>
  <div >
    <p class="sub-menu-temperature">{{ otherMenu.temperature }}</p>
    <p v-if="otherMenu.softDrink">Not Coffee</p>
    <p v-if="otherMenu.forKids">For The Kids</p>
  </div>
</template>

<script>
export default {
  props: ["otherMenu"],
};
</script>

<style>
.sub-menu-temperature {
}
</style>