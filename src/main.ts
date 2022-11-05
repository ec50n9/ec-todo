import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";

import "@unocss/reset/tailwind.css";
import "uno.css";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
