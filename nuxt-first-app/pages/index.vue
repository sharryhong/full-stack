<template>
  <div class="container">
    <section class="intro">
      <h1 class="intro-title">Get the news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link to="/posts/1" class="post-preview">
        <article >
          <div class="post-thumbnail" style="background-image: url('https://specialhelps.com/wp-content/uploads/2020/05/Tech.jpg')">

          </div>
          <div class="post-content">
            <h2>Post Title</h2>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link to="/posts/2" class="post-preview">
        <article >
          <div class="post-thumbnail" style="background-image: url('https://specialhelps.com/wp-content/uploads/2020/05/Tech.jpg')">

          </div>
          <div class="post-content">
            <h2>Post Title</h2>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main';
</style>
