import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./slices/mainSlice/mainSlice";

export default configureStore({
  reducer: {
    mainReducer
  }
});
