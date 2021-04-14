export const todoReducer = (todos, { type, payload }) => {
  // parameter: state, action {type, payload}
  switch (type) {
    case "ADD_TODO":
      return [
        ...todos,
        { title: payload, id: todos.length + 1, status: "todo" },
      ];
    case "SET_INIT_DATA":
      return payload;
    case "CHANGE_TODO_STATUS":
      return todos.map((todo) => {
        if (todo.id === +payload) {
          if (todo.status === "todo") {
            return { ...todo, status: "done" }
          } else {
            return {...todo, status: "todo"}
          }
        } else {
          return todo
        }
      });
    default:
      break;
  }
};
