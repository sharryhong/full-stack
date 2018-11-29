import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Notfound from '../components/Notfound.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
    store.getters.isAuth ? next() : next(loginPath) // 토큰이 있다면 라우터 계속 진행, 없다면 이전페이지로 가기
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home, beforeEnter: requireAuth },
    {path: '/login', component: Login},
    {path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
        {path: 'c/:cid', component: Card, beforeEnter: requireAuth}
    ]},
    {path: '*', component: Notfound}
  ]
})

export default router
