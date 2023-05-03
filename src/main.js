import App from './App.vue'
import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home/Home.vue'
import MinhasReservas from './views/MinhasReservas/MinhasReservas.vue';
import SignIn from './views/SignIn/SignIn.vue';
import SignUp from './views/SignUp/SignUp.vue';


import './assets/main.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'singin',
            component: SignIn,
        },
        {
         path: '/signup',
         name: 'signup',
         component: SignUp,

        },
        { 
          path: '/home',
          name: 'home',
          component: Home
        
        },
        {
            path:'/minhasReservas',
            name: 'minhasreservas',
            component: MinhasReservas,
        }
    ],
})
createApp(App).use(router).mount('#app')
