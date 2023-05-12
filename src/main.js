import App from "./App.vue";
import { createApp } from "vue";
import {
  faHome,
  faList,
  faPhone,
  faAddressCard,
  faClose,
  faRightToBracket,
  
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/Home.vue";
import MinhasReservas from "./views/MinhasReservas/MinhasReservas.vue";
import SignIn from "./views/SignIn/SignIn.vue";
import SignUp from "./views/SignUp/SignUp.vue";
import NossaHistoria from "./views/NossaHistoria/NossaHistoria.vue";
import Contato from "./views/Contato/Contato.vue";

import "./assets/main.css";

library.add(faHome, faList, faPhone, faAddressCard, faRightToBracket, faClose);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/minhasReservas",
      name: "minhasreservas",
      component: MinhasReservas,
    },
    {
      path: "/NossaHistoria",
      name: "nossahistoria",
      component: NossaHistoria,
    },
    {
      path: "/Contato",
      name: "contato",
      component: Contato,
    },
  ],
});
createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");
