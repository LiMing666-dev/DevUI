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
                path: "/button",
                name: "Button",
                component: () => import("../button/button.vue"),
            },
            {
                path: "/",
                name: "Input",
                component: () => import("../input/input.vue"),
            }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
