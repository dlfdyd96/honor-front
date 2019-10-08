import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Fall_2018 from '@/components/2018Fall'
import Spring_2019 from '@/components/2019Spring'
import Fall_2019 from '@/components/2019Fall'
import PlanModel from '@/components/PlanModel'
import BusinessModel from '@/components/Business_model'
import Contributors from '@/components/Contributors'
import Product_Item from '@/components/Product_Item'
import LoginForm from '@/components/LoginForm'
import Join from '@/components/Join'
import Notice from '@/components/Notice'
import Article from '@/components/Article'
import Qna from '@/components/Qna'
import Behind from '@/components/Behind'
import Collection from '@/components/Collection'
import Members from '@/components/Members'
import DetailItem from '@/components/DetailItem'
import Bulletin from '@/components/Bulletin'
import JoinComplete from '@/components/JoinComplete'
import FindInfo from '@/components/FindInfo'
import FindID from '@/components/FindID'
import FindPw from '@/components/FindPw'
import GetID from '@/components/GetID'
import GetPw from '@/components/GetPw'
import FindComplete from '@/components/FindComplete'
import MyPage from '@/components/MyPage'
import MyItemList from '@/components/MyItemList'
import Modification from '@/components/Modification'
import Withdraw from '@/components/Withdraw'
import CompleteWithdraw from '@/components/CompleteWithdraw'
import CreateQnA from '@/components/CreateQnA'

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
      path: '/notice',
      component: Notice
    },
    {
      path: '/join',
      component: Join
    },
    {
      path: '/planmodel',
      name: 'PlanModel',
      component: PlanModel
    },
    {
      path: '/bm',
      name: 'BusinessModel',
      component: BusinessModel
    },
    {
      path: '/contributor',
      name: 'Contributors',
      component: Contributors
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/fall19',
      name: '2019_Fall',
      component: Fall_2019
    },
    {
      path: '/spring19',
      name: '2019_Spring',
      component: Spring_2019
    },
    {
      path: '/fall18',
      name: '2018_Fall',
      component: Fall_2018
    },
    {
      path: '/product',
      name: 'Item',
      component: Product_Item
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/qna',
      name: 'Qna',
      component: Qna
    },
    {
      path: '/behind',
      name: 'Behind',
      component: Behind
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/product/detail',
      name: 'DetailItem',
      component: DetailItem
    },
    {
      path: '/bulletin',
      name: 'Bulletin',
      component: Bulletin
    },
    {
      path: '/complete',
      name: 'JoinComplete',
      component: JoinComplete
    },
    {
      path: '/findinfo',
      name: 'FindInfo',
      component: FindInfo
    },
    {
      path: '/findid',
      name: 'FindId',
      component: FindID
    },
    {
      path: '/findpw',
      name: 'findPw',
      component: FindPw
    },
    {
      path: '/getid',
      name: 'GetID',
      component: GetID
    },
    {
      path: '/getpw',
      name: 'GetPw',
      component: GetPw
    },
    {
      path: '/findcomplete',
      name: 'FindComplete',
      component: FindComplete
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/myitemlist',
      name: 'MyItemList',
      component: MyItemList
    },
    {
      path: '/modification',
      name: 'Modification',
      component: Modification
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/completeWithdraw',
      name: 'CompleteWithdraw',
      component: CompleteWithdraw
    },
    {
      path: '/createqna',
      name: 'CreateQnA',
      component: CreateQnA
    }
  ]
})
