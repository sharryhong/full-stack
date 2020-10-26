<template>
  <div>
    <h1>Event</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index" />
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'
export default {
  head() {
    return {
      title: 'Event List',
    }
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('http://localhost:3000/events');
      return {
        events: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  },
  components: {
    EventCard
  }
}
</script>

<style>

</style>
