<script>
    import side_nav from './Navbar'

    export default {
        name: "user_dash_shop",
        components: {side_nav},
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }],
                productDialog: false,
                cart:[],
                message:"",
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
                value4: '',
            }
        },
        methods:{
            addToCart:function () {
                this.$router.push('user-shop')
                // message="its added";

            }
        },
        computed:{
            getProducts(){
                return this.$store.getters.getProducts
            }

        },
    }
</script>

<template>
    <div>
        <side_nav>
            <slot></slot>
        </side_nav>

        <el-row>
            <el-col :span="16">
                <div class="grid-content">

                    <el-row>
                        <ul>
                            <li v-for="product in getProducts">
                        <el-col :span="6">
                            <div class="grid-content">
                                <!--<router-link :to></router-link>-->
                                <img class="my_images" @click="productDialog = true" src="../../assets/ps4.jpg"
                                     alt="image"/>
                                <p> {{product.product_name}} <br> {{product.product_type}} <br> KSH {{product.product_price}}</p>
                                <el-button type="success" @click="addToCart">ADD TO CART</el-button>
                            </div>
                        </el-col>
                            </li>
                        </ul>
                        <!--<el-col :span="6">-->
                            <!--<div class="grid-content">-->
                                <!--<img class="my_images" @click="productDialog = true" src="../../assets/ps4_box.jpeg"-->
                                     <!--alt="image"/>-->
                                <!--<p> PLAYSTATION 4 <br> PRO <br> KSH 20,000</p>-->
                                <!--<el-button type="success" @click="addToCart">ADD TO CART</el-button>-->
                            <!--</div>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6">-->
                            <!--<div class="grid-content">-->
                                <!--<img class="my_images" @click="productDialog = true" src="../../assets/ps4_army.jpeg"-->
                                     <!--alt="image"/>-->
                                <!--<p> PLAYSTATION 4 <br> PRO <br> KSH 40,000</p>-->
                                <!--<el-button type="success" @click="addToCart">ADD TO CART</el-button>-->
                            <!--</div>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6">-->
                            <!--<div class="grid-content">-->
                                <!--<img class="my_images" @click="productDialog = true" src="../../assets/x_box.jpeg"-->
                                     <!--alt="image"/>-->
                                <!--<p> PLAYSTATION 4 <br> PRO <br> KSH 30,000</p>-->
                                <!--<el-button type="success" @click="addToCart">ADD TO CART</el-button>-->
                            <!--</div>-->
                        <!--</el-col>-->
                    </el-row>
{{message}}
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <todo-list :todos="todos"></todo-list>
                    <todo-list :todos="todos"></todo-list>
                    <todo-list :todos="todos"></todo-list>
                    <el-button type="primary">Checkout</el-button>
                </div>
            </el-col>
        </el-row>
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
                            <el-button type="success" @click="addToCart">ADD TO CART</el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>


<style scoped>
    ul li{
        list-style: none;
        display: inline-flex;
    }
    .el-row {
        margin-bottom: 20px;

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .my_images {
        width: 200px;
        height: 200px;
        cursor: pointer;
    }

    .my_pop_images {
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

    .cart-card {
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