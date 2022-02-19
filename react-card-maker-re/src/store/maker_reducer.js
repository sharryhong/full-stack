export const MakerReducer = (cards, { type, payload }) => {
  switch (type) {
    case "ADD":
      return "add test";
    default:
      throw new Error("Invalid type");
  }
};
