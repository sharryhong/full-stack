<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RandomNumber />
  </div>
</template>

<script>
import RandomNumber from "@/components/RandomNumber.vue";

export default {
  name: "About",
  components: {
    RandomNumber
  }
};
</script>
