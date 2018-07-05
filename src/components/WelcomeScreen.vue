
<script>
    import logincomponent from './LoginComponent'
    import signupcomponent from './SignupComponent'
    import userdashboard from './customer/usr_dash_content'
    import admindashboard from './admin/admin_dash_content'


    export default {
        name: "welcome_page",
        components:{logincomponent,signupcomponent,userdashboard, admindashboard},
        data() {
            return {

            }
        }
    }
</script>


<template>
    <div>
        <!--<logincomponent><slot></slot></logincomponent>-->
        <!--<userdashboard><slot></slot></userdashboard>-->
        <admindashboard>
            <slot></slot>
        </admindashboard>
    </div>
</template>

<style scoped>

</style>