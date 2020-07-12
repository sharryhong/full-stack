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
        axios.post('https://nuxt-blog-120dd.firebaseio.com/posts.json', { ...postData, updatedDate: new Date() })
          .then(result => console.log(result))
          .catch(e => console.log(e));
      }
    }
  };
</script>

<style lang="scss" scoped>
.page-new-post {
  padding: 20px;
}
</style>