<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button type="button" @click="addTodo">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["item"],
  methods: {
    handleInput(event: any) {
      this.$emit("input", event.target.value);
    },
    addTodo() {
      console.log("item", this.item);
    },
  },
});
</script>

<style scoped></style>
