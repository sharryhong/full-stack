<template>
  <div>
    single user ID: {{ $route.params.id }}
  </div>
</template>

<script>
  export default {
    layout: 'user',
    validate ({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    }
  }
</script>

<style lang="scss" scoped>

</style>