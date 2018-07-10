<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Gamerz Signup</span>
            </div>
            <p v-if="errors.length">
            <div class="error">
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>

            <div class="text item">
                <el-form ref="form" :model="user" label-width="120px">
                    <el-form-item label="User Name: ">
                        <el-input v-model="user.username" aria-required="true"></el-input>
                    </el-form-item>
                    <el-form-item label="User Email: ">
                        <el-input v-model="user.useremail"></el-input>
                    </el-form-item>
                    <el-form-item label="User Phone: ">
                        <el-input v-model="user.userphone"></el-input>
                    </el-form-item>
                    <el-form-item label="Password: ">
                        <el-input type="password" v-model="user.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="button" class="signupbtn" @click="addUser()" icon="el-icon-success">Signup
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <p>Have an account
                <router-link :to="{name:'login_page'}">Login Here</router-link>
            </p>
            <router-view></router-view>
        </el-card>
    </div>
</template>

<script>
    import {mapFields} from 'vuex-map-fields';
    import {getField, updateField} from 'vuex-map-fields';

    export default {
        name: "signup_page",
        data() {
            return {
                user: {
                    // users details
                    useremail: '',
                    username: '',
                    userphone: '',
                    password: '',
                },
                users: [],
                errors: [],
            }
        },
        computed: {
            ...mapFields([
                'user.useremail',
                'user.username',
                'user.userphone',
                'user.userpassword',
                // ...
            ]),
        },
        methods: {

            addUser: function () {
                this.errors = [];

                if (!this.user.useremail) {
                    this.errors.push('Email required.');
                }
                if (!this.user.username) {
                    this.errors.push('Name required.');
                }
                if (!this.user.userphone) {
                    this.errors.push('Phone required.');
                }
                if (!this.user.password) {
                    this.errors.push('Password required.');
                }

                if (this.user.useremail && this.user.username && this.user.userphone && this.user.password) {
                    this.users.push(this.user);
                    this.$store.dispatch('AddUser', this.user).then(() => {
                        this.user = {};
                        this.$router.push('login');
                    });

                    return true;
                }

            }
        }
    }

</script>

<style scoped>
    .error {
        background: #F56C6C;
        border-radius: 5px;
    }

    ul li {
        list-style: none;
    }

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

    .signupbtn {
        width: 320px;
    }
</style>