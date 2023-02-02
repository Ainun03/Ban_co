import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const userState = JSON.parse(localStorage.getItem("ban_co"))
    ? JSON.parse(localStorage.getItem("ban_co"))
    : {
        token: "",
        name: "",
        email: "",
        countryId: "",
        provinceId: '',
        cityId: "",
        districtId: "",
        address: ""
      };
const isAuthenticated = JSON.parse(localStorage.getItem("ban_co"))
    ? true
    : false;

    const initialState = {
        isAuthenticated,
        ...userState,
    };


export const login = createAsyncThunk(
        "/login",
        async (payload, thunkAPI) => {
            const url = `http://localhost:8080/login`;
            try {
                const resp = await axios.post(url, payload,{
                    headers: {
                      accept: "*/*",
                      "Content-Type": "multipart/form-data",
                    },
                  })
    
                // remove id from response
                const data = resp.data.data;
                // delete data.id;           
                // keep access token and user information on local storage
                localStorage.setItem("ban_co", JSON.stringify(data));
    
                return data;
            } catch (error) {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                toast.dismiss();
                toast.error(message);
                return thunkAPI.rejectWithValue();
            }
        }
    );
    
    export const register = createAsyncThunk(
        "/register",
        async (payload, thunkAPI) => {
            const url = `http://localhost:8080/register`;
            try {
                const resp = await axios.post(url, payload,
                    {
                        headers: {
                          accept: "*/*",
                          "Content-Type": "multipart/form-data",
                          // "Content-Type": "application/json",
                        },
                      })
                ;
    
                // remove id from response
                const data = resp.data;
                // if (!data.address) data.address = { city: "", street: "" };
                // delete data.id;
    
                // keep access token and user information on local storage
                localStorage.setItem("ban_co", JSON.stringify(data));
    
                return data;
            } catch (error) {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                toast.dismiss();
                toast.error(message);
                return thunkAPI.rejectWithValue();
            }
        }
    );
    export const updateProfile = createAsyncThunk(
        "/update-profile",
        async (payload, thunkAPI) => {
            const { token } = thunkAPI.getState().user;
    
            const url = `http://localhost:8080/update-profile`;
            try {
                const resp = await axios.put(url, payload, {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "multipart/form-data",
                    },
                });
    
                // remove id from response
                const data = resp.data.data;
                // delete data.id;
    
                let tempLocalstorage = JSON.parse(
                    localStorage.getItem("ban_co")
                );
                tempLocalstorage.name = data.name;
                tempLocalstorage.countryId = data.countryId;
                tempLocalstorage.provinceId = data.provinceId;
                tempLocalstorage.cityId = data.cityId;
                tempLocalstorage.districtId = data.address;
    
                // keep access token and user information on local storage
                localStorage.setItem(
                    "ban_co",
                    JSON.stringify(tempLocalstorage)
                );
                console.log(data);
    
                return data;
            } catch (error) {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                toast.dismiss();
                toast.error(message);
                return thunkAPI.rejectWithValue();
            }
        }
    );

    const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {},
        extraReducers: {
            [login.pending]: (state) => {},
            [login.fulfilled]: (state, { payload }) => {
                state.isAuthenticated = true;
                state.token = payload.token;
                state.name = payload.name;
                state.email = payload.email;
                state.countryId = payload.countryId;
                state.provinceId = payload.provinceId;
                state.cityId = payload.cityId;
                state.districtId = payload.districtId;
                state.address = payload.address;
            },
            [login.rejected]: (state, action) => {},

            [register.pending]: (state) => {},
            [register.fulfilled]: (state, { payload }) => {
                state.isAuthenticated = true;
                // state.id = payload.id;
                state.token = payload.token;
                state.name = payload.name;
                state.email = payload.email;
                state.address = payload.address;

            },
            [register.rejected]: (state, action) => {},

            [updateProfile.pending]: (state) => {},
            [updateProfile.fulfilled]: (state, { payload }) => {
                state.name = payload.name;
                state.countryId = payload.countryId;
                state.provinceId = payload.provinceId;
                state.cityId = payload.cityId;
                state.districtId = payload.address;
                state.fullName = payload.name;
            },
            [updateProfile.rejected]: (state, action) => {},
        },
    });
    
    export default userSlice.reducer;