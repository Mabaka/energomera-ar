import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import { createPinia } from 'pinia';
import {HomeView,HardwareView,ARView,hardwareList,ringView} from "./views";

const router = createRouter({
    routes:
    [   {
            path: '/',          
            name: 'home',  
            component: HomeView,             
        },
        {
            path: '/hardware/:id',            
            name: 'hardware',
            component: HardwareView,

        },
        {
            path:'/arviewer/:id',
            name: 'arviewer',
            component: ARView,
            meta:{
                hideHeader:true
            }
        },
        {
            path: '/type/:id',
            name: 'type',
            component:hardwareList
        },
        {
            path: '/ring/',
            name: 'ring',
            component:ringView,
        }
    ],
    history: createWebHistory()
});
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
