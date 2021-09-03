<template>
  <div >
    <p class="sub-menu-temperature">{{ otherMenu.temperature }}</p>
    <p class="sub-menu-drink" v-if="otherMenu.softDrink">Not Coffee</p>
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
  margin-bottom: 10px;
}
.sub-menu-drink {
  margin-bottom: 10px;
}
</style>