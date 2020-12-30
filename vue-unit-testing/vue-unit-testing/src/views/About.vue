<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RandomNumber />
    <MessageContainer />
  </div>
</template>

<script>
import RandomNumber from "@/components/RandomNumber.vue";
import MessageContainer from "@/components/MessageContainer.vue";

export default {
  name: "About",
  components: {
    RandomNumber,
    MessageContainer
  }
};
</script>
