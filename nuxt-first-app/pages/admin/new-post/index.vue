<template>
  <div class="page-new-post">
    <section class="new-form">
      <AdminPostForm
        :post="editedPost"
        @submit="onSubmit"
      />
    </section>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';
  import AdminPostForm from '@/components/Admin/AdminPostForm';

  export default {
    layout: 'admin',
    components: {
      AdminPostForm,
    },
    data() {
      return {
        editedPost: {
          author: '',
          title: '',
          thumbnail: '',
          content: '',
        },
      };
    },
    methods: {
      onSubmit(postData) {
        this.$store.dispatch('addPost', postData)
          .then(() => {
            this.$router.push('/admin');
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
.page-new-post {
  padding: 20px;
}
</style>