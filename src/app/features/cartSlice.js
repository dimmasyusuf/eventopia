import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postCart = createAsyncThunk('cart/postCart', async (data) => {
  const response = await axios.post('http://localhost:2000/carts', data);
  return response.data;
});

export const getCarts = createAsyncThunk('cart/getCarts', async () => {
  const response = await axios.get('http://localhost:2000/carts');
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
    carts: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loading = false;
      })
      .addCase(postCart.rejected, (state) => {
        state.loading = false;
        state.cart = {};
      })
      .addCase(getCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        state.carts = action.payload;
        state.loading = false;
      })
      .addCase(getCarts.rejected, (state) => {
        state.loading = false;
        state.carts = [];
      });
  },
});

export default cartSlice.reducer;
