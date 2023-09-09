import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (user) => {
    const response = await axios.post('http://localhost:2000/users/', user);
    return response.data;
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.user = {};
      });
  },
});

export default registerSlice.reducer;
