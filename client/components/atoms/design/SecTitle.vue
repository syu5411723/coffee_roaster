<template>
  <div>
    <div class="sec-titile">
      <h2 class="sec-title-text">
        {{ text }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style>
.sec-title-text {
  font-size: 25px;
  letter-spacing: 4px;
  font-family: "Oswald", sans-serif;
}
</style>