<template>
  <div class="page-admin-post">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

  export default {
    components: {
        AdminPostForm,
      },
      data() {
      return {
        loadedPost: {
          author: 'Sharry',
          title: 'Hello There',
          thumbnailLink: 'https://specialhelps.com/wp-content/uploads/2020/05/Tech.jpg',
          content: 'kkk',
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
.page-admin-post {
  padding: 20px;
}
</style>