<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/user">User</nuxt-link>
        <nuxt-link to="/products">Products</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
  .nav-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;

    a {
      text-decoration: none;
    }
  }
</style>