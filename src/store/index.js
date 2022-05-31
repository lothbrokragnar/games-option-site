import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import StoreGames from '../../public/games.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: StoreGames,
    comments:[],
  },
  plugins: [createPersistedState()],
  mutations: {
    ADD_COMMENT(state, newComment){
      const newComments = {user: newComment.userName, opinion: newComment.userComment, game: newComment.userGame}
      state.comments.push(newComments)
    },
    DELETE_COMMENT(state, index){
      state.comments.splice (index, 1)
    },
    MODIFY_COMMENT(state, payload){
      let opinions = state.comments[payload.id]
      opinions.user = payload.user
      opinions.opinion = payload.opinion
    }
  },
})
