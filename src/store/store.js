import api from "./middleware/api";
import { configureStore } from "@reduxjs/toolkit";
import coupleSlice from "./coupleSlice";
import globalSlice from "./globalSlice";
import messageSlice from "./messageSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
    couple: coupleSlice,
    message: messageSlice,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    api,
  ],
});
