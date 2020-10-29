import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    INITIALIZE(state) {
      let posts = localStorage.getItem('posts');
      if(posts) {
        state.posts = JSON.parse(posts);
      }
    },
    PUSH_POST(state, post) {
      post.postId = state.posts.length;
      state.posts.push(post);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    UPDATE_POST(state, { post, index }) {
      state.posts.splice(index, 1, post);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    DELETE_POST(state, { index }) {
      state.posts.splice(index, 1);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    }
  },
  actions: {
    initialize({commit}) {
      commit('INITIALIZE');
    },
    addPost({ commit }, post) {
      if(post)
        commit('PUSH_POST', post);
    },
    updatePost({commit, getters}, post) {
      let index = getters.getPostIndex(post.postId);
      if(post && index >= 0)
        commit('UPDATE_POST', { post, index });
    },
    deletePostAction({commit, getters}, postId) {
      let index = getters.getPostIndex(postId);
      if(index >= 0)
        commit('DELETE_POST', { index });
    },    
  },
  modules: {
  },
  getters: {
    getPost: (state) => (postId) => {
      return state.posts.filter(post => post.postId == postId)[0];
    },
    getPostIndex: (state) => (postId) => {
      for(let i=0;i<state.posts.length;i++) {
        if(state.posts[i].postId === postId )
          return i;
      }
      return -1;
    },
  }
})
