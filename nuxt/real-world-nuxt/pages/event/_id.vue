<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: `Event ${ this.event.title }`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `Event description ${ this.event.title }`,
          }
        ]
      }
    },
    async asyncData({ $axios, error, params }) {
      try {
        const { data } = await $axios.get(`http://localhost:3000/events/${ params.id }`);
        return {
          event: data
        }
      } catch (e) {
        error({
          statusCode: 503,
          message: `Unable to fetch even #${ params.id }`
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>