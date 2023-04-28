export const ticketsModule = {
  state: () => ({
    // tickets: [{ id: 1, name: "Звонок", date: "13.03.2023", row: "3", place: "2" }],
    tickets: [
      { 
        date: "1.04.2023",
        tickets: [
          { id: 1, name: "Звонок", row: "3", place: "2"}
        ]
      },
      { 
        date: "2.04.2023",
        tickets: []
      },
      { 
        date: "3.04.2023",
        tickets: []
      }
    ]
  }),
  getters: {
    TICKETS(state) {
      return state.tickets;
    },
  },
  mutations: {
    ADD_TICKET(state, payload) {
      state.tickets.forEach(element => {
        if (element.date === payload.date) {
          element.tickets.push(payload)
        }
      });
    },
    REMOVE_TICKET(state, payload) {
      state.tickets.forEach(element => {
        element.tickets = element.tickets.filter((el) => {
          return el.id !== payload.id
        })
      });
    }
  },
  actions: {},
  namespaced: true,
};
