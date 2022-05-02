import { createSlice } from "@reduxjs/toolkit";

export const bucketList = createSlice({
  name: "bucketList",
  initialState: {
    bucketList: [],
  },

  reducers: {
    bucketListReceived: (bucketList, action) => {
      bucketList.bucketList = action.payload.bucketList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { bucketListReceived } = bucketList.actions;

export default bucketList.reducer;
