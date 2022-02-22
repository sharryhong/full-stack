export const UserMakerReducer = (cards, { type, payload }) => {
  switch (type) {
    case "UPDATE": {
      return;
    }
    case "DELETE": {
      return;
    }
    default:
      throw new Error("Invalid type");
  }
};
