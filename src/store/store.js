import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  animeList: []
}

const mutations = {
  saveAnime(state, anime) {
    state.animeList = anime
  },
  updateAnime(state, updatedAnime) {
    state.animeList = state.animeList.map(anime => {
      if (anime.id === updatedAnime.id) {
        return { ...anime, ...updatedAnime }
      }
      return anime
    })
  },
}

const actions = {
  addAnime({ commit, state }, anime) {
    let myAnimeList = [...state.animeList, anime]
    commit('saveAnime', myAnimeList)
  },
  updateAnime({ commit }, updatedAnime) {
    commit('updateAnime', updatedAnime)
  },
}

const getters = {
  animeList: (state) => state.animeList,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
