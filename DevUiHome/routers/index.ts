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
                        path: "/",
                        name: "Introduction",
                        component: () => import("../pages/document/introduction/index.vue")
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
