<template>
    <div class="header-list">
        <header-list text="About Us" />
        <header-list text="Menu" />
        <header-list text="Shop" />
        <header-list text="Location" />
    </div>
</template>

<script>
import HeaderList from "../../atoms/header/HeaderList.vue"
export default {
    components: {
        HeaderList,
    }
}
</script>

<style>
.header-list {
    display: flex;
    justify-content: space-between;
    width: 400px;
}
</style>