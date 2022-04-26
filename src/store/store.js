import { combineReducers, configureStore } from "@reduxjs/toolkit";

import api from "./middleware/api";
import coupleSlice from "./coupleSlice";
import globalSlice from "./globalSlice";
import messageSlice from "./messageSlice";

const rootReducer = combineReducers({
  global: globalSlice,
  couple: coupleSlice,
  message: messageSlice,
});

export default configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    api,
  ],
});
