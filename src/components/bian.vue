<template>
<div class="kkk">
    <button @click="show">点击传值给父组件</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            aa: 'aaaaaavaa'
        }
    },
    props: ['titles'],
    methods: {
        show() {
            this.$emit('show', this.aa)
        }
    }
}
</script>

<style>

</style>
