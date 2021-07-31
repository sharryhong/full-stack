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
          :index="index"
          :todoItem="todoItem"
          @remove="removeTodoItem"
          @toggle="toggleTodoItemDone"
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
  save(todoItems: Todo[]) {
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(STORYGE_KEY, parsed);
  },
  fetch() {
    const todoItems = localStorage.getItem(STORYGE_KEY) || "[]";
    const result = JSON.parse(todoItems);
    return result;
  },
};

export interface Todo {
  title: string;
  done: boolean;
}

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: "",
      todoItems: [] as Todo[],
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
      const todo: Todo = {
        title: value,
        done: false,
      };
      this.todoItems.push(todo);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
    removeTodoItem(index: number) {
      console.log("removeTodoItem", index);
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
    toggleTodoItemDone(todoItem: Todo, index: number) {
      this.todoItems.splice(index, 1, {
        ...todoItem,
        done: !todoItem.done,
      });
      storage.save(this.todoItems);
    },
  },
});
</script>

<style scoped></style>
