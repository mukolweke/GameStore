<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Gamerz Signup</span>
            </div>
            <div class="text item">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="User Name: ">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="User Email: ">
                        <el-input v-model="form.useremail"></el-input>
                    </el-form-item>
                    <el-form-item label="User Phone: ">
                        <el-input v-model="form.userphone"></el-input>
                    </el-form-item>
                    <el-form-item label="Password: ">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" class="signupbtn" @click="addUser" icon="el-icon-success">Signup</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <p>Have an account <router-link :to="{name:'login_page'}">Login Here</router-link></p>
            <router-view></router-view>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "signup_page",
        data() {
            return {
                form: {
                    // users details
                    useremail: '',
                    username: '',
                    userphone: '',
                    password: '',
                },
                users:[]
            }
        },
        methods: {

            addUser:function(form){
                // push user to users array
                this.users.push(form);

                // redirect to login
                this.$router.push('login')
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
        margin: 100px auto;
    }
    .signupbtn{
        width: 320px;
    }
</style>