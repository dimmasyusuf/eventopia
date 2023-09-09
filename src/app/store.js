import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../app/features/eventSlice';
import registerReducer from '../app/features/registerSlice';
import loginReducer from '../app/features/loginSlice';

export const store = configureStore({
  reducer: {
    events: eventReducer,
    register: registerReducer,
    login: loginReducer,
  },
});
