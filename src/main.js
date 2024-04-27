import { createApp } from "vue";
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'     //Our .vue startup file

// import HomeView from './HomeView.vue' // импортим так то, на что ссылки
import MainView from './views/MainView.vue';
import EquipmentView from './views/EquipmentView.vue';
import NotFound from './views/NotFound.vue';
const routes = [
    { path: '/', component: MainView },
    { path: '/equipment', component: EquipmentView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//Will mount the vue app inside a HTML element which id equals to "app" (div into templetes/index.html file)
createApp(App)
    .use(router)
    .mount('#app');

import './static/global.css'    //Import css files as modules