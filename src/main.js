//BASISOPZET

import { createApp } from "vue"; //haalt vue uit de node modules
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
//verschillende imports chainen