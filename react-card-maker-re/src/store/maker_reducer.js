export const MakerReducer = (cards, { type, payload }) => {
  switch (type) {
    case "UPDATE": {
      return { ...cards, [payload.id]: payload };
    }
    case "DELETE": {
      const updated = { ...cards };
      delete updated[payload];
      return updated;
    }
    default:
      throw new Error("Invalid type");
  }
};
