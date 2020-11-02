<template>
  <div>
    <h1>Event</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from "~/components/EventCard";
import { mapState } from "vuex";

export default {
  components: {
    EventCard,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("events/fetchEvents");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch events at this time. Please try again.",
      });
    }
  },
  head() {
    return {
      title: "Event List",
    };
  },
  computed: mapState({
    events: (state) => state.events.events,
  }),
};
</script>

<style></style>
