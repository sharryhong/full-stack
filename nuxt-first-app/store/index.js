import Vuex from 'vuex';

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
        return context.app.$axios
          .$get('/posts.json')
          .then(data => {
            const postsArray = [];
            for (const key in data) {
              postsArray.push({ ...data[key], id: key });
            }
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(e => context.error(e));
      },
      addPost(vuexContext, post) {
        const createPost = {
          ...post, updatedDate: new Date()
        };
        return this.$axios
          .$post('/posts.json', createPost)
          .then(data => {
            vuexContext.commit('addPost', { ...createPost, id: data.name });
          })
          .catch(e => console.log(e));
      },
      editPost(vuexContext, post) {
        return this.$axios
          .$put('/posts/' + post.id + '.json', post)
          .then(() => {
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