<template>
  <nuxt-link
    :to="PostLink"
    class="post-preview"
  >
    <article>
      <img
        class="post-thumbnail"
        :style="`background-image: url(${thumbnail})`"
      >
      <div class="post-content">
        <h2>{{ title }}</h2>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    PostLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
    }
  }
};
</script>

<style lang="scss" scoped>
.post-preview + .post-preview {
  margin: 10px;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 400px;
}

a {
  text-decoration: none;
  color: black;
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
