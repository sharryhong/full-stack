import React, { useCallback, useEffect, useState } from "react";
import styles from "./maker.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import Editor from "components/editor/Editor";
import Preview from "components/preview/Preview";
import Footer from "pages/layout/footer/Footer";
import Header from "pages/layout/header/Header";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const { state: locationState } = useLocation();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.userId);

  const navigate = useNavigate();
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [cardRepository, userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [authService, navigate]);

  const deleteCard = (cardId) => {
    const updated = { ...cards };
    delete updated[cardId];
    setCards(updated);
    cardRepository.removeCard(userId, cardId);
  };

  const addCard = (card) => {
    const updated = { [card.id]: card, ...cards };
    setCards(updated);
    cardRepository.saveCard(userId, card);
  };

  const updateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={addCard}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
