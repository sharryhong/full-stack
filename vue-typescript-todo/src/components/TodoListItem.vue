<template>
  <li>
    <span
      class="item"
      :class="{ complete: todoItem.done }"
      @click="toggleItem"
      >{{ todoItem.title }}</span
    >
    <button type="button" @click="removeItem">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Todo } from "@/App.vue";

export default Vue.extend({
  props: {
    todoItem: {
      type: Object as PropType<Todo>,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    removeItem() {
      this.$emit("remove", this.index);
    },
    toggleItem() {
      this.$emit("toggle", this.todoItem, this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
