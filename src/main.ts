import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios"; // axios
import VueAxios from "vue-axios"; // axios

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios); // axios
app.provide("axios", app.config.globalProperties.axios); // axios

app.mount("#app");
