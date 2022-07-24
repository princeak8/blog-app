import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
  displaySetting: { perPage: 0, totalPosts: 0 },
};

const postSlice = createSlice({
  name: "postsDisplay",

  initialState,

  reducers: {
    initializePosts(state, action) {
      state.allPosts = action.payload;
    },

    setDisplaySetting(state, action) {
      state.displaySetting = { ...action.payload };
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
