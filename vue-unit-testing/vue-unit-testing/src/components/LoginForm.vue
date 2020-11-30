<template>
  <form>
    <input type="text" v-model="name">
    <button type="button" @click="onSubmit">Login</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      onSubmit() {
        this.$emit('loginSubmitted', { name: this.name })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>