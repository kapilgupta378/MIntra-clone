import { createSlice } from "@reduxjs/toolkit";

export const navStateSlice = createSlice({
  name: "option",
  initialState: {
    value: "",
    loading: false,
  },
  reducers: {
    changeOption: (state, action) => {
      state.value = action.payload;
    },
    changeLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeOption, changeLoading } = navStateSlice.actions;

export default navStateSlice.reducer;
