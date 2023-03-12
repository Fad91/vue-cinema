export const filmsModule = {
  state: () => ({
    films: [
      { id: "1", name: 'Туруру', genre: 'Ужасы', rating: 5, desc: 'lorem asfasf asfasfa zxczxcz 32423423 bvcbvcvbcvb' },
      { id: "2", name: 'Рутутун', genre: 'Комедия', rating: 5, desc: 'fjcns 3234 lvjdgnaent [][][][][][][][' },
      { id: "3", name: 'Оу май', genre: 'Порево', rating: 5, desc: 'sfdsd xcvxvcn sdfsfd ewrwerew lk;lk;lk;' },
      { id: "4", name: 'БАМБАМ', genre: 'Триллер', rating: 3, desc: 'sfdsd xcvxvcn sdfsfd ewrwerewм аываячсячы;' }
    ],
  }),
  getters: {
    FILMS(state) {
      return state.films
    }
  },
  mutations: {},
  actions: {},
  namespaced: true,
};
