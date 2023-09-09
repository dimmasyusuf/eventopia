import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../app/features/eventSlice';

export const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});
