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
      <PostList is-admin />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
import AppButton from '@/components/UI/AppButton';

export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton,
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
