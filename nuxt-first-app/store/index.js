import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, posts) {
        state.loadedPosts.push(posts);
      },
      editPost(state, editedposts) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedposts.id);
        state.loadedPosts[postIndex] = editedposts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + '/posts.json')
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(e => context.error(e));
      },
      addPost(vuexContext, post) {
        const createPost = {
          ...post, updatedDate: new Date()
        };
        return axios.post(process.env.baseUrl + '/posts.json', createPost)
          .then(res => {
            vuexContext.commit('addPost', { ...createPost, id: res.data.name });
          })
          .catch(e => console.log(e));
      },
      editPost(vuexContext, post) {
        return axios.put(process.env.baseUrl + '/posts/' + post.id + '.json', post)
          .then(res => {
            vuexContext.commit('editPost', post);
          })
          .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;