import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    user: {
      gender: null,
      lookingFor: null,
      agreement: null,
      email: "",
      finalQuiz: {
        question1: null,
        question2: null,
        question3: null
      }
    }
  },
  reducers: {
    setUserData: (state, { payload }) => {
      if (payload.key.includes("finalQuiz")) {
        const questionKey = payload.key.split(".")[1];
        state.user.finalQuiz[questionKey] = payload?.value;
      } else {
        state.user[payload.key] = payload?.value;
      }
    }
  }
});

export const { reducer: mainReducer, actions: mainActions } = mainSlice;
