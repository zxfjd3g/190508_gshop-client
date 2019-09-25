
import MSite from '@/pages/MSite/MSite.vue'
import Search from 'pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods.vue'
import Ratings from '../pages/Shop/Ratings.vue'
import Info from '../pages/Shop/Info.vue'

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'

import Review from 'pages/Review/Review.vue'
import SlotTest from 'pages/Review/SlotTest/SlotTest.vue'
import MixinTest from 'pages/Review/MixinTest/MixinTest.vue'
import ComponentTest from 'pages/Review/ComponentTest/ComponentTest.vue'
import EventTest from 'pages/Review/EventTest/EventTest.vue'
import ModelTest from 'pages/Review/ModelTest/ModelTest.vue'
import ReactiveTest from 'pages/Review/ReactiveTest/ReactiveTest.vue'
import LifeTest from 'pages/Review/LifeTest/LifeTest.vue'

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: Goods
      },
      {
        path: 'ratings',
        component: Ratings
      },
      {
        path: 'info',
        component: Info
      },
      {
        path: '',
        redirect: '/shop/goods'
      },
    ]
  },

  {
    path: '/a',
    component: A
  }, 
  {
    path: '/b',
    component: B,
    children: [
      {
        path: '/b/b1',
        component: B1
      },
      {
        path: '/b/b2',
        component: B2
      },
    ]
   },
   {
    path: '/review',
    component: Review,
    children: [
      {
        path: '/review/slot',
        component: SlotTest
      },
      {
        path: '/review/mixin',
        component: MixinTest
      },
      {
        path: '/review/component',
        component: ComponentTest
      },
      {
        path: '/review/event',
        component: EventTest
      },
      {
        path: '/review/model',
        component: ModelTest
      },
      {
        path: '/review/reactive',
        component: ReactiveTest
      },
      {
        path: '/review/life',
        component: LifeTest
      },
    ]
  },

  {
    path: '/',
    redirect: '/msite'
  }
]