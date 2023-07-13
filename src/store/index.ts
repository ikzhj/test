// /src/store/index.ts
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'

//引入所有views下.vue文件 
let modules = import.meta.glob("../views/**")

// pinia状态管理器
export const useStore = defineStore('myStore', {
    state: () => {
        return {
            // 路由表
            routes: [] as Array<RouteRecordRaw>
        }
    },
    getters: {},
    actions: {
        // 添加动态路由，并同步到状态管理器中，这个地方逻辑是写的最简单的方式，大家可以根据自己的业务需求来改写，本质就是使用addRoute来实现
        addRoutes(data: Array<any>, router: any) {
            data.forEach(m => {
                this.routes.push({
                    path: m.path,
                    name: m.name,
                    // 错误示例：components:()=>import(`../views/Pages/${m.component}`)
                    // 正确示例如下：
                    component: modules[`../views/${m.component}.vue`],
                })
            })
            console.log('this.routes',this.routes)
            this.routes.forEach(m => router.addRoute(m))
        },
    }
})