import firebaseApp from "./firebase";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";

const database = getDatabase(firebaseApp);

export const saveCard = (userId, card, onUpdate) => {
  const url = `${userId}/cards/${card.id}`;
  set(ref(database, url), {
    ...card,
  });
  onUpdate();
};

export const deleteCard = (userId, card, onUpdate) => {
  const url = `${userId}/cards/${card.id}`;
  remove(ref(database, url));
  onUpdate();
};

export const syncCard = (userId, onUpdate) => {
  const url = `${userId}/cards`;
  const starCountRef = ref(database, url);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    data && onUpdate(data);
  });
};
