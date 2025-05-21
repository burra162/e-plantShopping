// Importing necessary tools from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing the cart slice reducer
import cartReducer from './CartSlice';

// Configuring and creating the Redux store
const store = configureStore({
  reducer: {
    // The 'cart' slice will be managed by cartReducer
    cart: cartReducer,
  },
});

// Exporting the store for use in the app
export default store;
