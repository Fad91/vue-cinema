import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/components/UI/index";
import toast from '@k90mirzaei/vue-toast';
import '@k90mirzaei/vue-toast/dist/index.css'
import "@/styles/main.scss";
import "vue-inline-calendar/dist/style.css";
import "./assets/tailwind.css";
import "./assets/tailwind.css";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store).use(toast).mount("#app");
