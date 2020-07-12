<template>
  <div class="container">
    <section class="intro">
      <h1 class="intro-title">
        Get the news!
      </h1>
    </section>
    <PostList />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList,
  },
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
