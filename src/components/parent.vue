<template>
<div class="kkk">aa
    <childers :titles="title" @show='show'>子组件</childers>

</div>
</template>

<script>
import childers from '@/components/bian.vue'
export default {
    data() {
        return {
            title: '往子组件传入的值',
            chiler_text: 'c'
        }
    },
    components: {
        childers
    },
    methods: {
        show(val) {
            alert(val)
        }
    },
}
</script>

<style>

</style>
