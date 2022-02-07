export const habitReducer = (habits, { type, payload }) => {
  switch (type) {
    case "ADD_HABIT":
      return [{ id: Date.now(), title: payload, count: 0 }, ...habits];
    case "DELETE_HABIT":
      return habits.filter((item) => item.id !== payload.id);
    case "COUNT_INCREASE":
      return habits.map((item) => {
        if (item.id === payload.id) {
          return { ...payload, count: payload.count + 1 };
        }
        return item;
      });
    case "COUNT_DECREASE":
      return habits.map((item) => {
        if (item.id === payload.id) {
          return {
            ...payload,
            count: payload.count === 0 ? 0 : payload.count - 1,
          };
        }
        return item;
      });
    case "RESET_COUNT":
      return habits.map((habit) => {
        if (habit.count !== 0) return { ...habit, count: 0 };
        return habit;
      });
    default:
      throw new Error();
  }
};
