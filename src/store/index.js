import { createStore } from "vuex";
import { filmsModule } from "@/store/filmsModule";
import { basketModule } from "@/store/basketModule";
import { ticketsModule } from "@/store/ticketsModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { 
    films: filmsModule, 
    basket: basketModule, 
    tickets: ticketsModule
  },
});
