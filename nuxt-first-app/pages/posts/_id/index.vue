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
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
            id: 1,
            title: `First Post (ID: ${context.params.id})`,
            author: 'Sharry',
            updateDate: new Date(),
            thumbnail: 'https://specialhelps.com/wp-content/uploads/2020/05/Tech.jpg',
            content: 'okokok'
        }
      });
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/post_id";
</style>
