<script>
    import side_nav from './Navbar'

    export default {
        name: "user_dash_shop",
        components:{side_nav},
        data() {
            return {
                productDialog: false,
                options: [{
                    value: '1',
                    label: '1'
                }, {
                    value: '2',
                    label: '2'
                }, {
                    value: '3',
                    label: '3'
                }, {
                    value: '4',
                    label: '5'
                }, {
                    value: '6',
                    label: '6'
                }],
                value4: ''
            }
        },
    }
</script>

<template>
    <div>
        <side_nav><slot></slot></side_nav>
        <el-container>

            <el-card class="box-card-outer">
                <el-row>
                    <input type="text" name="search" class="search" style="height: 30px;" placeholder="Search..">
                </el-row>
                <hr style="width: 100px;">
                <br>
                <el-row>
                    <el-col :span="6">
                        <div class="grid-content">
                            <!--<router-link :to></router-link>-->
                            <img class="my_images" @click="productDialog = true" src="../../assets/ps4.jpg" alt="image"/>
                            <p> PLAYSTATION 4 <br> PRO <br> KSH 40,000</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content">
                            <img class="my_images" @click="productDialog = true" src="../../assets/ps4_box.jpeg" alt="image"/>
                            <p> PLAYSTATION 4 <br> PRO <br> KSH 20,000</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content">
                            <img class="my_images" @click="productDialog = true" src="../../assets/ps4_army.jpeg" alt="image"/>
                            <p> PLAYSTATION 4 <br> PRO <br> KSH 40,000</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content">
                            <img class="my_images" @click="productDialog = true" src="../../assets/x_box.jpeg" alt="image"/>
                            <p> PLAYSTATION 4 <br> PRO <br> KSH 30,000</p>
                        </div>
                    </el-col>
                </el-row>

            </el-card>
        </el-container>

        <!--product dialog-->
        <el-dialog
                :visible.sync="productDialog"
                width="70%"
                center>
            <el-row>
                <el-col :span="12">
                    <img class="my_pop_images" src="../../assets/ps4.jpg" alt="image"/>
                </el-col>
                <el-col :span="12">
                    <h1>PLAYSTATION</h1>
                    <h3>PS4 PRO</h3>
                    <h4>Description</h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <br><br>
                    <el-row>
                        <el-col :span="12">
                            <el-select v-model="value4" clearable placeholder="How Many">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="12">
                            <el-button type="success">ADD TO CART</el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-dialog>

    </div>
</template>


<style scoped>

    .my_images {
        width: 200px;
        height: 200px;
        cursor: pointer;
    }
    .my_pop_images{
        width: 400px;
        height: 400px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        padding: 5px;
        /*border: 1px solid black;*/
    }

    .box-card-outer {
        margin: 20px auto;
    }
    input[type=text] {
        width: 130px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
    }

    /* When the input field gets focus, change its width to 100% */
    input[type=text]:focus {
        width: 100%;
    }
    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;

    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }

        .sidenav a {
            font-size: 18px;
        }
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>