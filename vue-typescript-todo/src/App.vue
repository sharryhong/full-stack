<template>
  <div>
    <h1>Vue Todo with TS</h1>
    <TodoInput :item="todoText" @input="updateTodoText" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "@/components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
  },
});
</script>

<style scoped></style>
