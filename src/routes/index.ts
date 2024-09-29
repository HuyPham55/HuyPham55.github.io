import {RouteRecordRaw} from "vue-router";
import HomePage from "@/views/home/HomePage.vue";
import AboutPage from "@/views/about/AboutPage.vue";
import Layout from "../layout/Layout.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: {path: 'home'},
        component: Layout,
        children: [
            {
                path: "home",
                name: "home",
                meta: {title: 'Pham Duc Huy - Home Page - '},
                component: HomePage,
            },
            {
                path: 'about',
                name: "about",
                meta: {title: 'Pham Duc Huy - About - '},
                component: AboutPage
            }
        ]
    },
]
export default routes;