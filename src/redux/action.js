import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../helpers/constants";

//dillerin verisini çeker
export const getLanguages = createAsyncThunk(
  "translate/getLanguages",
  async () => {
    //asenkron işlemler
    const res = await axios.get(
      "https://text-translator2.p.rapidapi.com/getLanguages",
      options
    );

    const languages = res.data.data.languages;

    /*
*diziyi dönüp
*bütün code keylerini value a çevirir
*bütün name keylerini label çevirir.

    */

    const newLanguages = languages.map((lang) => ({
      value: lang.code,
      label: lang.name,
    }));

    //store a gönderilecek değer return edilir.

    return newLanguages;
  }
);
