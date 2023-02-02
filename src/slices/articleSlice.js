import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListArticle = createAsyncThunk(
    "/get-list-article",
    async () => {
        const url= `http://192.168.43.144:8080/get-list-article`;
      try {
        const res = await axios.get(url)
        // return await (await productService.getAllProduct()).data;
        console.log(res)
        return res.data;
      } catch (error) {
        console.error(error.message);
      }
    }
  );

  export const postArticle = createAsyncThunk(
    "/create-article",
    async ({title,description},thunkAPI) => {
      console.log({title,description})
      const { token,isAuthenticated } = thunkAPI.getState().auth.login;
      console.log({token,isAuthenticated})

        const url= `http://192.168.43.144:8080/create-article`;
      try {
        const res = await axios.post(url, 
          JSON.stringify({title,description}),
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token,
              // "Content-Type": "multipart/form-data",
            },
            // withCredentials: true,
          }
          )

        // return await (await productService.getAllProduct()).data;
        return res.data.data;
      } catch (error) {
        console.error(error.message);
      }
    }
  );
const articleSlice =createSlice({
    name:"article",
    initialState:{
        listArticle: [],
        postArticle:{},
        create: {},
        error: "",
        loading: false
    },
    extraReducers:{
        [getListArticle.pending]: (state, action) => {
            state.loading = true;
          },
          [getListArticle.fulfilled]: (state, action) => {
            state.loading = false;
            // state.listArticle = action.payload ? action.payload : [];
            state.listArticle = action.payload
          },
          [getListArticle.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
          
          [postArticle.pending]: (state, action) => {
            state.loading = true;
          },
          [postArticle.fulfilled]: (state, action) => {
            state.loading = false;
            // state.postArticle = action.payload ? action.payload : {};
            state.postArticle = action.payload
            // const postArt = state.login
            console.log(state.postArticle)
          },
          [postArticle.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
    }
})
export default articleSlice.reducer;