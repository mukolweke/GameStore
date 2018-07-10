import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        username: '',
        useremail: '',
        userphone: '',
        password: '',
        users: [{username: 'admin', useremail: 'admin@admin.com', userphone: '123456789', password: 'admin'}],
        products: [
            {product_name:'PLAYSTATION',product_type:'PS2',product_desc:'2ND HAND, CHIPPED',product_price:'9000',product_stock:10},
            {product_name:'GAMES',product_type:'NBA 2K19',product_desc:'SEALED',product_price:'6500',product_stock:10},
            {product_name:'GAME PADS',product_type:'PS2',product_desc:'Original',product_price:'500',product_stock:10},
            {product_name:'PLAYSTATION',product_type:'XBOX',product_desc:'XBOX LIVE',product_price:'25000',product_stock:10},
        ]
    },

    mutations: {

        ADD_USER(state, newUser) {
            state.users.push(newUser);
        },

        ADD_PRODUCT(state, newProduct) {
            state.products.push(newProduct);
        }

    },
    actions: {

        AddUser(store, newuser) {
            store.commit('ADD_USER', newuser);
        },

        AddProducts(store, newProduct) {
            store.commit('ADD_PRODUCT', newProduct);
        }
    },

    getters: {
        getUsers: state => state.users,

        getProducts: state => state.products,

        // getName(state) {
        //     return state.users.username
        // },
        //
        // getEmail(state) {
        //     return state.users.username
        // },
        //
        // getPassword(state) {
        //     return state.users.password
        // }

    }
})

export default store
