import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEvents = createAsyncThunk('events/getEvents', async () => {
  const response = await axios.get('http://localhost:2000/events');
  return response.data;
});

export const getEventById = createAsyncThunk(
  'events/getEventById',
  async (id) => {
    const response = await axios.get(`http://localhost:2000/events/${id}`);
    return response.data;
  }
);

export const postEvent = createAsyncThunk('events/postEvent', async (data) => {
  const response = await axios.post('http://localhost:2000/events', data);
  return response.data;
});

export const searchEvent = createAsyncThunk(
  'events/searchEvent',
  async (query) => {
    const response = await axios.get(`http://localhost:2000/events?q=${query}`);
    return response.data;
  }
);

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    event: {},
    loading: false,
    searchResults: [],
    queryLength: 0,
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
      })
      .addCase(getEventById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.event = action.payload;
        state.loading = false;
      })
      .addCase(getEventById.rejected, (state) => {
        state.loading = false;
        state.event = null;
      })
      .addCase(postEvent.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEvent.fulfilled, (state, action) => {
        state.event = action.payload;
        state.loading = false;
      })
      .addCase(postEvent.rejected, (state) => {
        state.loading = false;
        state.event = {};
      })
      .addCase(searchEvent.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.loading = false;
        state.queryLength = action.meta.arg.length;
      });
  },
});

export default eventSlice.reducer;
