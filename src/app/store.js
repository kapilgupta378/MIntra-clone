import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "../features/navState/navStateSlice";

export default configureStore({
  reducer: {
    option: optionReducer,
  },
});
