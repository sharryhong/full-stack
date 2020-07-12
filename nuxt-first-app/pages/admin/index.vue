<template>
  <div class="page-admin">
    <section class="new-post">
      <button 
        type="button"
        @click="$router.push('/admin/new-post')"
      >
        Create Post
      </button>
    </section>
    <section class="existing-posts">
      <h3 class="title-posts">
        Existing Posts
      </h3>
      <PostList is-admin />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList,
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
