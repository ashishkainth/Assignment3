import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Chapati", "Dal", "Paneer"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload.card.card.title);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    resetCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
