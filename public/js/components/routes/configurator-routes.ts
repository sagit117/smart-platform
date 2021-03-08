import { createRouter, createWebHashHistory, RouteRecordRaw /*,createWebHistory */ } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        name: 'home-configurator',
        path: '/',
        component: () => import('../ConfiguratorHome.vue')
    },
    {
        name: 'constructor',
        path: '/constructor',
        component: () => import('../Constructor.vue')
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('../app/NotFoundComponent.vue')
    }
]

const Router = createRouter({
    history: createWebHashHistory(), //createWebHistory(),
    routes
})

export default Router
