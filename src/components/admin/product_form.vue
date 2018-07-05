<template>
    <div>
        <el-container>
        <el-card class="box-card-outer">
            <el-row>
                <el-col :span="12">
                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="Product Name: ">
                            <el-input class="inpt" v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Product Type: ">
                            <el-input class="inpt"v-model="form.type_name"></el-input>
                        </el-form-item>
                        <el-form-item label="Description: ">
                            <el-input type="textarea" v-model="form.description"></el-input>
                        </el-form-item>
                        <el-form-item label="Product Price: ">
                            <el-input class="inpt"v-model="form.price"></el-input>
                        </el-form-item>
                        <el-form-item label="Product Stock: ">
                            <el-input class="inpt"v-model="form.stock"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="success"><i class="el-icon-check"></i> Product</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

        </el-card>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "product_form",
        data() {
            return {
                productDialog: false,
                form: {
                    name: '',
                    type_name: '',
                    description: '',
                    price: 0,
                    stock: 0,
                    products: [],
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .box-card-outer {
        margin: 20px auto;
        width: 500px;
    }
    .inpt{
        width: 300px;
    }
</style>