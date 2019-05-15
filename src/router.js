import Vue from 'vue'
import VueRouter from 'vue-router'

import DataTable from "@/components/DataTable"
import UserView from "@/components/UserView"
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
        //individual student page
        {
            path:"/student",
            name: "student",
            component: UserView
        }
    ]
})

export default router;