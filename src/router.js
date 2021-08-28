import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
// 引进二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'
// 引进三级路由
import Phone from './components/about/contact/Phone.vue'
import Address from './components/about/contact/Address.vue'

// 配置在主页面里默认渲染除了Home，还有二级路由的orderingGuide, delivery, history
export const routes = [
    {
      path: '/',
      name: 'homeLink',
      components: {
          default: Home,
          'orderingGuide': OrderingGuide,
          'delivery': Delivery,
          'history': History
      }
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin
      // 路由专有守卫
    //   beforeEnter: (to, from, next) => {}
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: About,
      // 默认二级路由
      redirect: '/about/contact',
      children: [
        {
          path: '/about/contact',
          name: 'contactLink',
          component: Contact,
          // 默认三级路由
          redirect: '/about/contact/phone',
          children: [
            {
              path: '/about/contact/phone',
              name: 'phone',
              component: Phone
            },
            {
              path: '/about/contact/address',
              name: 'address',
              component: Address
            }
          ]
        },
        {
          path: '/about/delivery',
          name: 'deliveryLink',
          component: Delivery
        },
        {
          path: '/about/history',
          name: 'historyLink',
          component: History
        },
        {
          path: '/about/orderingguide',
          name: 'orderingGuideLink',
          component: OrderingGuide
        }
      ]
    },
    {
      path: '/login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/register',
      name: 'registerLink',
      component: Register
    },
    {
      // 默认根路由
      path: '*',
      redirect: '/'
    }
  ]
  // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   // 判断store.gettes.isLogin === false
//   if (to.path == '/login' || to.path == '/register') {
//     next() 
//     } else {
//     next('/login')
//   }
// })
