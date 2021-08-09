<template>
    <div>
        <img :src="menu.picture" alt="" class="menu-img">
    </div>
</template>

<script>
export default {
    props: ['menu']
}
</script>

<style>
.menu-img {
    width: 100%;
    height: 100%;
}
</style>