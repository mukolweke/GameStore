<template>
    <div>
        <side_nav><slot></slot></side_nav>
        <el-row>
            <el-col :span="10">
                <img class="prof_image" src="../../assets/user_gamer.png" alt="image"/>
            </el-col>
            <el-col :span="14" style="padding-right: 70px;margin-top: 100px;">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Name: ">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Email: ">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="Phone: ">
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="Password: ">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" class="prf_btn">EDIT</el-button>
                        <el-button class="prf_btn">Cancel</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import side_nav from './Navbar'
    export default {
        name: "user_dash_profile",
        components:{side_nav},
        data() {
            return {
                form: {
                    // users details
                    email: '',
                    name: '',
                    phone: '',
                    password: '',
                },
                users:[]
            }
        },
    }
</script>

<style scoped>
    .prof_image{
        height: 300px;
        width: 300px;
    }
    .prf_btn{
        width: 40%;
    }
</style>