import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    user: {
      gender: null,
      lookingFor: null,
      agreement: null,
      email: ""
    }
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.user[payload.key] = payload?.value;
    }
  }
});

export const { reducer: mainReducer, actions: mainActions } = mainSlice;
