// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { users: [] as any[], user: null },
//   reducers: {
//     register(state, action) {
//       state.users.push(action.payload);
//     },
//     login(state, action) {
//       const { email } = action.payload;
//       const user = state.users.find((user: any) => user.email === email);
//       state.user = user || null;
//     },
//     logout(state) {
//       state.user = null;
//     },
//   },
// });

// export const { register, login, logout } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  users: User[];
  user: User | null;
}

const initialState: AuthState = {
  users: [],
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    login(state, action: PayloadAction<{ email: string; password: string }>) {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      state.user = user || null;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
