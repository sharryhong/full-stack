<template>
  <div>
    <h1>User</h1>
    <input type="text" v-model="userId">
    <button type="button" @click="onLoadUser">Load User</button>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    layout: 'user',
    data() {
      return {
        userId: '',
      }
    },
    methods: {
      onLoadUser() {
        this.$router.push('/user/' + this.userId);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>