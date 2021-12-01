import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../../api/redditAPI';

export const getPosts = createAsyncThunk('posts/getPosts', fetchPosts);

const initialState = {
  posts: {},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
