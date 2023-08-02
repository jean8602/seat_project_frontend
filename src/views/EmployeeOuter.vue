<script>
import { RouterLink, RouterView } from 'vue-router';
import FunctionSelectView from "../components/FunctionSelect.vue"

export default {
    components: {
        FunctionSelectView
    }
}

</script>

<template>
    <div>
        <FunctionSelectView/>
        <RouterView/>
    </div>
</template>

<style>
</style>