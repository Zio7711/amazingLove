import api from "./middleware/api";
import { configureStore } from "@reduxjs/toolkit";
import coupleSlice from "./coupleSlice";
import globalSlice from "./globalSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
    couple: coupleSlice,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    api,
  ],
});
