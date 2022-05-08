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

    bucketListItemAdded: (bucketList, action) => {
      bucketList.bucketList.unshift(action.payload.bucketListItemCreated);
    },

    bucketListItemUpdated: (bucketList, action) => {
      const bucketListItem = action.payload.bucketListItemUpdated;

      const bucketListItemIndex = bucketList.bucketList.findIndex(
        (bucketListItemInList) => bucketListItemInList.id === bucketListItem.id
      );
      bucketList.bucketList[bucketListItemIndex] = bucketListItem;
    },

    bucketListItemDeleted: (bucketList, action) => {
      const bucketListItemId = action.payload.bucketListItemId;
      const bucketListItemIndex = bucketList.bucketList.findIndex(
        (bucketListItemInList) => bucketListItemInList.id === bucketListItemId
      );
      bucketList.bucketList.splice(bucketListItemIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  bucketListReceived,
  bucketListItemUpdated,
  bucketListItemAdded,
  bucketListItemDeleted,
} = bucketList.actions;

export default bucketList.reducer;
