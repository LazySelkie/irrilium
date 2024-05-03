import { createApp } from "vue";
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'     //Our .vue startup file

import MainView from './views/MainView.vue';
import CharacterCreationView from './views/CharacterCreationView.vue';
import GodsView from './views/GodsView.vue';
import MagicView from './views/MagicView.vue';
import OtherRulesView from "./views/OtherRulesView.vue";
import EquipmentView from './views/EquipmentView.vue';
import BattleView from './views/BattleView.vue';
import NotFound from './views/NotFound.vue';

const routes = [
    // { path: '/', redirect: { name: 'Home' } },
    { path: '/', name: 'Home', component: MainView },
    { path: '/character_creation', component: CharacterCreationView },
    { path: '/gods', component: GodsView },
    { path: '/magic', component: MagicView },
    { path: '/other_rules', component: OtherRulesView },
    { path: '/equipment', component: EquipmentView },
    { path: '/battle', component: BattleView },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

//Will mount the vue app inside a HTML element which id equals to "app" (div into templetes/index.html file)
createApp(App)
    .use(router)
    .mount('#app');

import './static/global.css'    //Import css files as modules