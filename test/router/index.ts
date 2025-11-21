import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "index",
        component: () => import("../../App.vue"),
        children: [
            {
                path: "/",
                name: "Button",
                component: () => import("../button/button.vue"),
            }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
