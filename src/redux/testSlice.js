import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
? bu metod bizden 2 parametre ister
1- metodun görevini tanımlayan string
2-bir fonksiyon
 bu fonksiyon async işlemler yapar
apiden gelen cevabı store a aktarmak için return

*/

export const getUsers = createAsyncThunk("getUsers", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  return res.data;
});

const initialState = {
  users: [],
  isError: false,
  isLoading: true,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  //thunk aksiyonlarını ele almak için reducers yerine extrareducers kullanılır.
  extraReducers: {
    //henüz api den cevap gelmediyse state i günceller
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    //eğer apiden gelen cevap olumluysa
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },

    //eğer apiden gelen cevap olumsuzsa,
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default testSlice.reducer;
