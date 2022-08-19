import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";

import TreeData from './components/TreeData.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TreeData}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')