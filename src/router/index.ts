import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import { useStore } from "../store";
import { GetRoutes } from '../apis'

// 静态路由表
const routes: Array<RouteRecordRaw> = [
    {
        // 路由重定向配置
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Home',
        component: () => import('../views/Home.vue')
    },
    {
        // 404页面配置
        path: '/:catchAll(.*)',
        component: () => import('../views/404.vue')
    }
]

// 路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.path !== '/Home' && to.path !== '/') {
        const store = useStore()
        if (store.routes.length < 1) {

            GetRoutes().then((res: any) => {
                console.log(router,"KK");
                
                store.addRoutes(res.data.data, router)
                next({ path: to.path, replace: true })

            }).catch(_ => {
                next()
            })

        } else {
            next()
        }
    } else {
        next()
    }
})

export default router