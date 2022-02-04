import { firebaseDatabase } from "./firebase";

class CardRepository {
  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, cardId) {
    firebaseDatabase.ref(`${userId}/cards/${cardId}`).remove();
  }
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => ref.off();
  }
}

export default CardRepository;
