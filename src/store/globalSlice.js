import authStorage from "../../auth/authStorage";
import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    user: null,
    isLoading: false,
    socket: null,
  },

  reducers: {
    userReceived: (global, action) => {
      global.user = action.payload;
    },

    setLoadingState: (global, action) => {
      global.isLoading = action.payload;
    },

    loginSucceeded: (global, action) => {
      // store user
      global.user = action.payload.user;

      //store token after login
      authStorage
        .storeToken(action.payload.token)
        .catch((err) => console.warn(err));
    },

    autoLoginSucceeded: (global, action) => {
      // store user
      global.user = action.payload.user;
    },

    setSocket: (global, action) => {
      global.socket = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  userReceived,
  setLoadingState,
  setSocket,
  loginSucceeded,
  autoLoginSucceeded,
} = globalSlice.actions;

export default globalSlice.reducer;
