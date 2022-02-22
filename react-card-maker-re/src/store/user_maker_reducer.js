export const UserMakerReducer = (cards, { type, payload }) => {
  switch (type) {
    case "UPDATE": {
      const updated = { ...cards };
      updated[payload.id] = payload;
      return updated;
    }
    case "DELETE": {
      return;
    }
    default:
      throw new Error("Invalid type");
  }
};
