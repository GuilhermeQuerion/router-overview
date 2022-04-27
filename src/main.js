import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import PageA from "./components/PageA";
import PageB from "./components/PageB";
import PageC from "./components/PageC";
import UsuarioVue from "./components/UsuarioVue";

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: "/pageA", component:PageA},
        {path: "/pageB", component:PageB},
        {path: "/pageC", component:PageC},
        //Parametros na url
        {path: "/user/:userId", name: "usuariovue" ,component:UsuarioVue}

    ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
