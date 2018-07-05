<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-menu class="el-menu" mode="horizontal" @select="handleSelect">
                    <el-menu-item><span style="font-size:30px;cursor:pointer;" @click="leftNav()">&#9776; Menu</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="8">
                <h1>ADMIN DASH</h1>
            </el-col>
            <el-col :span="8">

            </el-col>
        </el-row>

        <!--menu items-->
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeLeftNav()">&times;</a>
            <router-link to="admin-shop">Shop</router-link>
            <router-link to="admin-create">Create</router-link>
            <router-link to="view-orders">Orders</router-link>
            <router-link to="login">Logout</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                cartDialog: false,
            }
        },
        methods: {
            leftNav() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
            },

            closeLeftNav() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";
            }
        }
    }
</script>

<style scoped>
    .el-menu {
        height: 50px;
    }

    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        text-align: center;
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


</style>