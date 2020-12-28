<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RandomNumber />
    <MessageDisplay />
  </div>
</template>

<script>
import RandomNumber from "@/components/RandomNumber.vue";
import MessageDisplay from "@/components/MessageDisplay.vue";

export default {
  name: "About",
  components: {
    RandomNumber,
    MessageDisplay
  }
};
</script>
