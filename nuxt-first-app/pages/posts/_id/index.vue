<template>
  <div class="single-post-page">
    <section class="post">
      <h2 class="post-title">
        {{ loadedPost.title }}
      </h2>
      <div class="post-details">
        <div>{{ loadedPost.updateDate }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        post feedback
        <a href="mailto:feedback@any-domain.com">mail</a>
      </p>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  asyncData(context) {
    return axios.get(process.env.baseUrl + '/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        };
      })
      .catch(e => context.error(e));
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/post_id";
</style>
