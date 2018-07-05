import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        username: '',
        useremail: '',
        userphone: '',
        password: ''
    },

    mutations:{


    },

    getters:{

        getName(state){
            return state.username
        },

        getEmail(state){
            return state.username
        },

        getPassword(state){
            return state.password
        }

    }
})

export default store
