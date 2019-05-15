import Vue from 'vue'
import VueRouter from 'vue-router'

import DataTable from "@/components/DataTable"
import UserView from "@/components/UserView"
import UserLogin from "@/components/UserLogin"
//use vue router
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes:[
        //admin page
        {
            path:"/admin",
            name: "admin",
            component: DataTable
        },
        //student login page
        {
            path:"/login",
            name: "login",
            component: UserLogin
        },
        //individual student page
        {
            path:"/viewing/:rfid_number?",
            name: "student",
            component: UserView
        }
    ]
})

export default router;