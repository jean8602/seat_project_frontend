<script>
import { RouterView } from 'vue-router';

import TableView from "../components/Table.vue"


export default {
    components: {
        TableView,

    },

    data() {
        return {
          
        }
    },
}

</script>

<template>
    <div class="">
        <div class="">
        </div>
        <div class="list">
            <TableView/>
        </div>
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
</style>