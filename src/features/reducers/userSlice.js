import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    username: null,
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => {
      return { email: null, username: null };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;