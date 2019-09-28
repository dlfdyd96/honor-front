import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Fall_2018 from '@/components/2018Fall'
import Spring_2019 from '@/components/2019Spring'
import Fall_2019 from '@/components/2019Fall'
import PlanModel from '@/components/PlanModel'
import BusinessModel from '@/components/Business_model'
import List_of_ontributors from '@/components/Listofontributors'
import Product_Item from '@/components/Product_Item'
import LoginForm from '@/components/LoginForm'
import JoinForm from '@/components/JoinForm'
import Notice from '@/components/Notice'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      component: LoginForm
    },
    {
      path: '/12',
      component: Notice
    },
    {
      path: '/join',
      component: JoinForm
    },
    {
      path: '/1',
      name: 'PlanModel',
      component: PlanModel
    },
    {
      path: '/2',
      name: 'BusinessModel',
      component: BusinessModel
    },
    {
      path: '/3',
      name: 'List_of_ontributors',
      component: List_of_ontributors
    },
    {
      path: '/4',
      name: '2019_Fall',
      component: Fall_2019
    },
    {
      path: '/5',
      name: '2019_Spring',
      component: Spring_2019
    },
    {
      path: '/6',
      name: '2018_Fall',
      component: Fall_2018
    },
    {
      path: '/7',
      name: 'Item',
      component: Product_Item
    }
  ]
})
