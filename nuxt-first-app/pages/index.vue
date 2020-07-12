<template>
  <div class="container">
    <section class="intro">
      <h1 class="intro-title">
        Get the news!
      </h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import PostPreview from '@/components/Posts/PostPreview';

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
        {
          id: 1,
          title: 'First Post',
          previewText: 'First PostPreview',
          thumbnail: 'https://specialhelps.com/wp-content/uploads/2020/05/Tech.jpg',
        },
        {
          id: 2,
          title: 'Second Post',
          previewText: 'Second PostPreview',
          thumbnail: 'https://specialhelps.com/wp-content/uploads/2020/05/Tech.jpg',
        }
      ]});
    }, 1500);
  },
  data() {
    return {
      loadedPosts: []
    };
  },
  created() {
    
  }
};
</script>

<style lang="scss" scoped>
.intro {
  height: 120px;
  background-image: url("~assets/images/background-img.jpeg");
  background-position: center;
  background-size: cover;
}
.intro-title {
  background-color: rgba(222, 222, 222, 0.5);
  padding: 10px;
  box-sizing: border-box;
}
</style>
