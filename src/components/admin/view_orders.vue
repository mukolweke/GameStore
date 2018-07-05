<template>
    <div>
        <navbar><slot></slot></navbar>
    </div>
</template>

<script>
    import navbar from './Navbar'

    export default {
        name: "admin_view_orders",
        components:{navbar}
    }
</script>

<style scoped>

</style>