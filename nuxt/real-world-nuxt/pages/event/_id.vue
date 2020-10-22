<template>
  <div>
    <h1>Event #{{ id }}</h1>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Event #' + this.id,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Event description #' + this.id,
          }
        ]
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>