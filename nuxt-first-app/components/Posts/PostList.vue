<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      thumbnail="https://specialhelps.com/wp-content/uploads/2020/05/Tech.jpg"
      title="Hello!"
      preview-text="This is my first post"
    />
    <PostPreview
      id="2"
      thumbnail="https://www.eurocontrol.int/sites/default/files/styles/16_9_1920x1080/public/2019-11/event-banner-women-tech.jpg?h=ba793b4a&itok=3IoYQ5sI"
      title="HaHa!"
      preview-text="This is my second post"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview,
  },
};
</script>

<style lang="scss" scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
