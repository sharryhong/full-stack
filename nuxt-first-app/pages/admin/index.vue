<template>
  <div class="page-admin">
    <section class="new-post">
      <AppButton
        @click="$router.push('/admin/new-post')"
      >
        Create Post
      </AppButton>
    </section>
    <section class="existing-posts">
      <h3 class="title-posts">
        Existing Posts
      </h3>
      <PostList
        is-admin
        :posts="loadedPosts"
      />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-admin {
  padding: 20px;
  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }
  .title-posts {
    text-align: center;
  }
}
</style>
