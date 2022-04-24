import api from './middleware/api';
import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';

export default configureStore({
  reducer: {
    global: globalSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});
