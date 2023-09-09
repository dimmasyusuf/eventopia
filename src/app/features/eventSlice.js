import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEvents = createAsyncThunk('events/getEvents', async () => {
  const response = await axios.get('http://localhost:2000/events');
  return response.data;
});

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      .addCase(getEvents.rejected, (state) => {
        state.loading = false;
        state.events = [];
      });
  },
});

export default eventSlice.reducer;
