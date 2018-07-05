import Vue from 'vue'
import Router from 'vue-router'
import WelcomeScreen from '../components/WelcomeScreen'
import LoginComponent from '@/components/LoginComponent'
import SignupComponent from '@/components/SignupComponent'
import admin_content_component from '@/components/admin/admin_dash_content'
import usr_content_component from '@/components/customer/usr_dash_content'
import usr_profile_component from '@/components/customer/usr_dash_profile'
import admin_create_product from '@/components/admin/create_product'
import admin_view_orders from '@/components/admin/view_orders'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'welcome_page',
            component: WelcomeScreen
        },
        {
            path: '/login',
            name: 'login_page',
            component: LoginComponent
        },
        {
            path: '/signup',
            name: 'signup_page',
            component: SignupComponent
        },

        {
            path: '/user-shop',
            name: 'user_dash_shop',
            component: usr_content_component
        },
        {
            path: '/user-profile',
            name: 'user_dash_profile',
            component: usr_profile_component
        },
        {
            path: '/admin-shop',
            name: 'admin_shop',
            component: admin_content_component
        },
        {
            path: '/view-orders',
            name: 'admin_view_orders',
            component: admin_view_orders
        },
        {
            path: '/admin-create',
            name: 'admin_create_product',
            component: admin_create_product
        }

    ]
})
