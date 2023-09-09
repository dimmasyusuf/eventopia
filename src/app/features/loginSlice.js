import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('login/loginUser', async () => {
  const response = await axios.get('http://localhost:2000/users/');
  return response.data;
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    users: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.users = [];
      });
  },
});

export default loginSlice.reducer;
