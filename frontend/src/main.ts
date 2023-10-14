import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import { createPinia } from 'pinia';
import {HomeView,HardwareView} from "@/views";

const router = createRouter({
    routes:
    [   {
            path: '/',            
            component: HomeView 
        },
        {
            path: '/hardware/:id',            
            name: 'hardware',
            component: HardwareView,

        }        
    ],
    history: createWebHistory()
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
