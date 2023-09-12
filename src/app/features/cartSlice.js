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

export const checkoutCarts = createAsyncThunk(
  'cart/checkoutCarts',
  async (data) => {
    const response = await axios.post(
      'http://localhost:2000/transactions',
      data
    );
    return response.data;
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  'cart/updateCartItemQuantity',
  async ({ id, quantity }) => {
    await axios.patch(`http://localhost:2000/carts/${id}`, {
      quantity,
    });
    return { id, quantity };
  }
);

export const removeCartItem = createAsyncThunk(
  'cart/removeCartItem',
  async (id) => {
    await axios.delete(`http://localhost:2000/carts/${id}`);
    return id;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
    carts: [],
    checkout: [],
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
      })
      .addCase(checkoutCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkoutCarts.fulfilled, (state, action) => {
        state.checkout = action.payload;
        state.carts = [];
        state.loading = false;
      })
      .addCase(checkoutCarts.rejected, (state) => {
        state.loading = false;
        state.checkout = [];
      })
      .addCase(updateCartItemQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        const { id, quantity } = action.payload;
        const cartIndex = state.carts.findIndex((cart) => cart.id === id);

        if (cartIndex !== -1) {
          state.carts[cartIndex].quantity = quantity;
        }

        state.loading = false;
      })
      .addCase(updateCartItemQuantity.rejected, (state) => {
        state.loading = false;
        state.carts = [];
      })
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        const id = action.payload;
        state.carts = state.carts.filter((cart) => cart.id !== id);
        state.loading = false;
      })
      .addCase(removeCartItem.rejected, (state) => {
        state.loading = false;
        state.carts = [];
      });
  },
});

export default cartSlice.reducer;
