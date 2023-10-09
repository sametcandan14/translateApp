import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "./action";

const initialState = {
  languages: [],
  isLoading: true,
  isError: false,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  // thunkta reducers yerine extraReducers kullanılır.
  extraReducers: {
    [getLanguages.pending]: (state) => {
      state.isLoading = true;
    },
    [getLanguages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.languages = action.payload;
    },
    [getLanguages.rejected]: (state, action) => {
      state.isError = "Dilleri alırken bir hata oluştu";
    },
  },
});

export default translateSlice.reducer;
