import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import EmployeeOuterView from "../views/EmployeeOuter.vue"
import EmployeeManageView from "../views/EmployeeManage.vue"
import AddEmployeeInfoView from "../views/AddEmployeeInfo.vue"
import SeatManageView from "../views/SeatManage.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/employee-outer',
      name: 'employee-outer',
      component: EmployeeOuterView,
      children: [
        {
          path: 'employee-manage',
          component: EmployeeManageView
        },

        {
          path: 'add-employeeInfo',
          component: AddEmployeeInfoView
        },

        {
          path: 'seat-manage',
          component: SeatManageView
        },
      ]

    },


  ]
})

export default router

