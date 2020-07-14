<template>
  <div class="page-admin-post">
    <section class="update-form">
      <AdminPostForm
        :post="loadedPost"
        @submit="onSubmit"
      />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  components: {
      AdminPostForm,
    },
  asyncData(context) {
    return context.app.$axios.$get('/posts/' + context.params.postId + '.json')
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postId }
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    onSubmit(editedPost) {
      this.$store.dispatch('editPost', editedPost)
          .then(() => {
            this.$router.push('/admin');
          });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-admin-post {
  padding: 20px;
}
</style>