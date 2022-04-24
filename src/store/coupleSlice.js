import { createSlice } from "@reduxjs/toolkit";

export const coupleSlice = createSlice({
  name: "couple",
  initialState: {
    couple: null,
  },

  reducers: {
    coupleReceived: (couple, action) => {
      couple.couple = action.payload.couple;
    },
  },
});

// Action creators are generated for each case reducer function
export const { coupleReceived } = coupleSlice.actions;

export default coupleSlice.reducer;
