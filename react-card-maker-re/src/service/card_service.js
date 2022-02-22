import firebaseApp from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

const database = getDatabase(firebaseApp);

export const saveCard = (userId, card) => {
  const url = `${userId}/cards/${card.id}`;
  set(ref(database, url), {
    card,
  });
};
