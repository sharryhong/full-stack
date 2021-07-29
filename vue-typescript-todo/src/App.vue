<template>
  <div>
    <header>
      <h1>Vue Todo with TS</h1>
    </header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
    </main>
    <div>
      <ul>
        <TodoListItem
          v-for="(todoItem, index) in todoItems"
          :key="index"
          :todoItem="todoItem"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

const STORYGE_KEY = "todo-v1";
const storage = {
  save(todoItems: any) {
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(STORYGE_KEY, parsed);
  },
  fetch() {
    const todoItems = localStorage.getItem(STORYGE_KEY) || "[]";
    const result = JSON.parse(todoItems);
    return result;
  },
};

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: "",
      todoItems: [] as any,
    };
  },
  created() {
    this.fetchTodoItems();
  },
  methods: {
    initTodoText() {
      this.todoText = "";
    },
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      this.todoItems.push(value);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
  },
});
</script>

<style scoped></style>
