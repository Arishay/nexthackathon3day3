// "use client"
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../redux/cartslice";


// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartslice";
import authReducer from "../redux/authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, // Include the auth slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
