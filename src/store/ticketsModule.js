export const ticketsModule = {
  state: () => ({
    tickets: [
      { name: 'Звонок', date: '13.03.2023', row: '3', place: '2'} 
    ],
  }),
  getters: {
    TICKETS(state) {
      return state.tickets
    }
  },
  mutations: {
    ADD_TICKET(state, payload) {
      state.tickets.push(payload)
    }
  },
  actions: {},
  namespaced: true,
};
