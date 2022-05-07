import { createSlice } from '@reduxjs/toolkit';

export const bucketList = createSlice({
  name: 'bucketList',
  initialState: {
    bucketList: [],
  },

  reducers: {
    bucketListReceived: (bucketList, action) => {
      bucketList.bucketList = action.payload.bucketList;
    },

    bucketListItemUpdated: (bucketList, action) => {
      const bucketListItem = action.payload.bucketListItem;
      console.log('bucketListItem', bucketListItem);
      // const bucketListItemIndex = bucketList.bucketList.findIndex(
      //   (bucketListItemInList) =>
      //     bucketListItemInList._id === bucketListItem._id
      // );
      // bucketList.bucketList[bucketListItemIndex] = bucketListItem;
    },
  },
});

// Action creators are generated for each case reducer function
export const { bucketListReceived, bucketListItemUpdated } = bucketList.actions;

export default bucketList.reducer;
