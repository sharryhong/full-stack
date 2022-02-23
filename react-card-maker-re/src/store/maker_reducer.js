export const MakerReducer = (cards, { type, payload }) => {
  switch (type) {
    case "SYNC": {
      return payload;
    }
    case "UPDATE": {
      const updated = { ...cards };
      updated[payload.id] = payload;
      return updated;
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
