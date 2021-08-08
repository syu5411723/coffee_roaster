<template>
    <div>
        <sub-menu-name />
        <sub-menu-select />
        <sub-menu-info />
    </div>
</template>

<script>
import SubMenuInfo from '../../../atoms/main/sec03/SubMenuInfo.vue'
import SubMenuName from '../../../atoms/main/sec03/SubMenuName.vue'
import SubMenuSelect from '../../../atoms/main/sec03/SubMenuSelect.vue'
export default {
  components: { SubMenuName, SubMenuSelect, SubMenuInfo },
    
}
</script>

<style>

</style>