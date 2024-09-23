import {createMemoryHistory, createRouter} from "vue-router";
import routes from "../routes";

const router = createRouter({
    history: createMemoryHistory(),
    routes,
    linkExactActiveClass: 'active',
    linkActiveClass: '',
})

export default router;