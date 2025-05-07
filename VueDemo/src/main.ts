import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Default from './components/Default.vue'
import Refs from './components/Refs.vue'
import Tabs from './components/Tabs.vue'
import LifeCycle from './components/LifeCycle.vue'
import Vuex from './components/Vuex.vue'
import store from './store/store'
import vuexORM from './components/user/UserForm.vue'

const routes = [
    { path: '/', component: Default },
    { path: '/hello', component: HelloWorld },
    { path: '/about', component: TheWelcome },
    { path: '/refs', component: Refs },
    { path: '/tabs', component: Tabs },
    { path: '/lifecycle', component: LifeCycle },
    { path: '/vuex', component: Vuex },
    { path: '/vuexORM', component: vuexORM }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

createApp(App).use(router).use(store).mount('#app')
