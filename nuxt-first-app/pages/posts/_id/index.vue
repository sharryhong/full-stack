<template>
  <div class="single-post-page">
    <section class="post">
      <h2 class="post-title">
        {{ loadedPost.title }}
      </h2>
      <div class="post-details">
        <div>{{ loadedPost.updatedDate | date }}</div>
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
export default {
  asyncData(context) {
    return context.app.$axios.$get('/posts/' + context.params.id + '.json')
      .then(data => {
        return {
          loadedPost: data
        };
      })
      .catch(e => context.error(e));
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/post_id";
</style>
