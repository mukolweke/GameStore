<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Welcome Gamerz</span>
        </div>
        <div class="text item">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="User Email">
                    <el-input v-model="form.useremail"></el-input>
                </el-form-item>
                <el-form-item label="Password: ">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" class="loginbtn" @click="comparePassword" icon="el-icon-success">Login
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <p>Don't have an account
            <router-link :to="{name:'signup_page'}">SignUp Here</router-link>
        </p>
    </el-card>
</template>

<script>
    export default {
        name: "login_page",
        props: {
            data:{
                users:[]
            }
        },
        data() {
            return {
                form: {
                    useremail: '',
                    password: '',
                    users: [],
                },

            }
        },

        computed: {
            getPass() {
                return this.$store.getters.getPassword
            }
        },

        methods: {
            // get stored password and reroute
            comparePassword(){
                if(this.$store.getters.getPassword === this.form.password){

                    if(this.$store.getters.getName === "Admin"){ //THIS.PASSWORD
                        // route to admin dashboard
                        this.$router.push('admin-dash')
                    }else{
                        // route to user dashboard
                        this.$router.push('user-dash')
                    }

                }else{

                    // attach a class to show error

                }

            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
        margin: 150px auto;
    }

    .loginbtn {
        width: 320px;
    }
</style>