import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'
import Register from '../components/Register.vue'
import UpdateProfile from '../components/UpdateProfile.vue'
import CreatePost from '../components/CreatePost.vue'
import Test from '../components/Test.vue'

function userCo() {
  if (!localStorage.getItem('id'))
    return { path: '/login'}
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: [userCo],
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/updateprofile',
    name: 'updateprofile',
    component: UpdateProfile
  },
  {
    path: '/createpost',
    name: 'createpost',
    component: CreatePost
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
