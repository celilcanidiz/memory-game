import { createSlice } from "@reduxjs/toolkit";

const data = require('../../data/data.json');
export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    items: data,
    flippedCards: [],
    score: 0,
    isOver: false,
    modalHidden: false,
  },
  reducers: {
    start: (state) => {
      state.items = state.items.sort(() => Math.random() - 0.5);

      state.items.map((card) => {
        card.isMatched = false;
        card.isOpen = false;
      });

      state.score = 0;
      state.isOver = false;
      state.modalHidden = true;
    },
    add: (state, action) => {
      const cards = state.items;
      const card = cards.find((card) => card.id === action.payload);

      card.isOpen = true;
      state.flippedCards = [...state.flippedCards, card];
    },
    check: (state) => {
      const firstFlipped = state.flippedCards[0];
      const secondFlipped = state.flippedCards[1];

      const firstCard = state.items.find((card) => card.id === firstFlipped.id);
      const secondCard = state.items.find(
        (card) => card.id === secondFlipped.id
      );

      //if cards match
      if (firstFlipped.img === secondFlipped.img) {
        state.score += 100;

        firstCard.isMatched = true;
        secondCard.isMatched = true;

        //Reset the game if every card is matched
        const isOver = state.items.every((card) => card.isMatched === true);
        if (isOver) {
          state.isOver = true;
          state.modalHidden = false;
        }
      } else {
        firstCard.isOpen = false;
        secondCard.isOpen = false;
      }

      state.flippedCards = [];
    },
  },
});

export const { start, check, add } = cardSlice.actions;

export default cardSlice.reducer;