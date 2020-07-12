<template>
  <div class="page-new-post">
    <section class="new-form">
      <AdminPostForm :post="editedPost" />
    </section>
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
    data() {
      return {
        editedPost: {
          author: '',
          title: '',
          thumbnailLink: '',
          content: '',
        },
      };
    },
    methods: {
      onCancel() {
        this.$router.push('/admin');
      },
      onSave() {
        console.log('onSave');
      },
    }
  };
</script>

<style lang="scss" scoped>
.page-new-post {
  padding: 20px;
}
</style>