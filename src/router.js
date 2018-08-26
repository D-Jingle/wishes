import Vue from 'vue'
import Router from 'vue-router'
import Login from './login/login'

import Student from './student/student.vue'
import WishList from './student/wishlist.vue'
import Task from './student/task.vue'
import Info from './student/info.vue'
import Comdetail from './student/comdetail'
import WishDetail from './student/wishdetail.vue'
import ComTask from './student/comtask.vue'
import UnComTask from './student/uncomtask.vue'
import RemainTask from './student/remaintask'
import UnComTaskDe from './student/uncomtaskde'
import RemainTaskDe from './student/remaintaskde'

import Teacher from './teacher/teacher.vue'
import WishListTea from './teacher/wishlist.vue'
import InfoTea from './teacher/info.vue'
import ComdetailTea from './teacher/comdetail'
import UnComdetailTea from './teacher/uncomdetail'
import Claim from './teacher/claim.vue'
import UnClaim from './teacher/unclaim.vue'
import RemainClaim from './teacher/remainclaim'
import ComClaim from './teacher/comclaim'
import Issue from './teacher/issue'
import RemainClaimDe from './teacher/remainclaimde'
import UnClaimDe from './teacher/unclaimde'
import ClaimDe from './teacher/claimde'

import Admin from './admin/admin.vue'
import WishListAdm from  './admin/wishlist.vue'
import ManageAdm from './admin/manage.vue'
import UserInfo from './admin/userinfo'
import RemainWishes from './admin/remainwishes'
import Wishes from './admin/wishes.vue'
import AllotAdm from './admin/allot.vue'
import UnAllotAdm from './admin/unallot.vue'
import ComWish from './admin/comwish'
import ComWishDe from './admin/comwishde'
import UnCommon from './admin/uncommon'
import UnCommonDe from './admin/uncommonde'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path:'/student',
      name:'student',
      component:Student,
      children:[
        {
          path:'comdetail',
          name:'comdetail',
          component:Comdetail
        },
        {
          path:'wishlist',
          name:'wishlist',
          component: WishList
        },
        {
          path:'wishdetail',
          name:'wishdetail',
          component:WishDetail
        },
        {
          path:'task',
          name:'task',
          component: Task,
          children:[
            {
              path:'comtask',
              name:'comtask',
              component: ComTask
            },
            {
              path:'uncomtask',
              name:'uncomtask',
              component: UnComTask
            },
            {
              path:'remaintask',
              name:'remaintask',
              component: RemainTask
            }
          ]
        },
        {
          path:'info',
          name:'info',
          component: Info
        },
        {
          path:'uncomtaskde',
          name:'uncomtaskde',
          component: UnComTaskDe
        },
        {
          path:'remaintaskde',
          name:'remaintaskde',
          component:RemainTaskDe
        }
      ]
    },

    {
      path:'/teacher',
      name:'teacher',
      component:Teacher,
      children:[
        {
          path:'wishlisttea',
          name:'wishlist',
          component: WishListTea,
          children:[
            {
              path:'claim',
              name: 'claim',
              component: Claim
            },
            {
              path:'unclaim',
              name: 'unclaim',
              component: UnClaim
            },
            {
              path:'comclaim',
              name:'comclaim',
              component: ComClaim
            },
            {
              path:'remainclaim',
              name:'remainclaim',
              component: RemainClaim
            },
          ]
        },
        {
          path:'claimde',
          name:'claimde',
          component:ClaimDe
        },
        {
          path:'unclaimde',
          name:'unclaimde',
          component:UnClaimDe
        },
        {
          path:'infotea',
          name:'info',
          component: InfoTea
        },
        {
          path:'comdetailtea',
          name:'comdetailtea',
          component: ComdetailTea
        },
        {
          path:'uncomdetailtea',
          name:'uncomdetailtea',
          component: UnComdetailTea
        },
        {
          path:'issue',
          name:'issue',
          component: Issue
        },
        {
          path:'remainclaimde',
          name:'remainclaimde',
          component: RemainClaimDe
        },
      ]
    },

    {
      path:'/admin',
      name:'admin',
      component:Admin,
      children:[
        {
          path:'wishlistadm',
          name:'wishlistadm',
          component:WishListAdm,
          children:[
            {
              path:'allotadm',
              name:'allotadm',
              component: AllotAdm
            },
            {
              path:'unallotadm',
              name:'unallotadm',
              component: UnAllotAdm
            },
            {
              path:'comwishadm',
              name:'comwishadm',
              component:ComWish
            },
            {
              path: 'uncommonadm',
              name: 'uncommonadm',
              component: UnCommon
            }
          ]
        },
        {
          path:'manageadm',
          name:'manageadm',
          component:ManageAdm
        },
        {
          path:'userinfo',
          name:'userinfo',
          component:UserInfo
        },
        {
          path:'wishes',
          name:'wishes',
          component:Wishes
        },
        {
          path:'remainwishes',
          name:'remainwishes',
          component:RemainWishes
        },
        {
          path:'comwishdeadm',
          name:'comwishdeadm',
          component:ComWishDe
        },
        {
          path:'uncommondeadm',
          name:'uncommondeadm',
          component:UnCommonDe
        }
      ]
    }
  ]
})
