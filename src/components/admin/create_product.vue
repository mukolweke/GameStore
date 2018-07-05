<template>
    <div>
        <navbar><slot></slot></navbar>
        <!--create form-->
        <product_form><slot></slot></product_form>
    </div>
</template>

<script>
    import navbar from './Navbar'
    import product_form from './product_form'

    export default {
        name: "admin_create_product",
        components:{navbar,product_form}
    }
</script>

<style scoped>

</style>