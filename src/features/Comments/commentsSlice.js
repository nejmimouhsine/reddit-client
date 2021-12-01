import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchComments } from '../../api/redditAPI';

export const getComments = createAsyncThunk(
  'comments/getComments',
  fetchComments
);

const initialState = {
  comments: {},
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: {
    [getComments.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getComments.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.comments = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const selectComments = (state) => state.comments;

export default commentsSlice.reducer;
