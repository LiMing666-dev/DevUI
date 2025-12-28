import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "index",
        component: () => import("../pages/index.vue"),
        children: [
            {
                path: "/1",
                name: "Home",
                component: () => import("../pages/home/index.vue"),
            },
            {
                path: "/",
                name: "Document",
                component: () => import("../pages/document/index.vue"),
                children: [
                    {
                        path: "/1",
                        name: "Introduction",
                        component: () => import("../pages/document/introduction/index.vue")
                    },


                    // 组件路由
                    {
                        path: "/button",
                        name: "Button",
                        component: () => import('../pages/document/components/buttton.vue')
                    },
                    {
                        path: "/card",
                        name: "Card",
                        component: () => import('../pages/document/components/card.vue')
                    }, {
                        path: "/chip",
                        name: "Chip",
                        component: () => import('../pages/document/components/chip.vue')
                    }, {
                        path: "/dialog",
                        name: "Dialog",
                        component: () => import('../pages/document/components/dialog.vue')
                    }, {
                        path: "/divider",
                        name: "Divider",
                        component: () => import('../pages/document/components/divider.vue')
                    }
                ]
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
