import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { addMethod } from "yup";
import { useDispatch, useSelector } from 'react-redux';

export const registerUser = createAsyncThunk(
  "/register",
  async ({ name, email, password, address }) => {
    
    console.log({ name, email, password, address });
    // console.log(name, email, password, address)
    const url = `http://192.168.43.144:8080/register`;
    try {
      const res = await axios.post(
        url,
        JSON.stringify({ name, email,  password, address }),
        {
          headers: {
            // "Content-Type": "application/json;charset=UTF-8",
            // 'Content-Type': 'application/json',
            accept: "*/*",
            "Content-Type": "multipart/form-data",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods":"*"
            // "Origin": "*",
          },
          // withCredentials: true,
          // body: JSON.stringify({
          //   name,
          //   email,
          //   password,
          //   address,
          // }),
        }
      );
      // let data = await res.json()
      // console.log("data", data)
      // if (res.status === 200) {
      //   localStorage.setItem("token", data.token)
      //   return { ...data, username: name, email: email }
      // } else {
      //   return thunkAPI.rejectWithValue(data)
      // }
      return res.data.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "/login",
  async ({ email, password }) => {
    console.log({email, password})
    const url = `http://192.168.43.144:8080/login`;
    try {
      // return await authService.login(user)
      const res = await axios.post(
        url,
        JSON.stringify({ email, password }),
        {
          headers: {
            accept: "*/*",
            "Content-Type": "multipart/form-data",
            // "Content-Type": "application/json",
          },
        }
      );
      return res.data.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
// GET USER 
export const getUsers = createAsyncThunk(
  "/profile",
  async (payload, thunkAPI) => {
    
    let url = `http://192.168.43.144:8080/profile`;
    try {
      const { isAuthenticated } = thunkAPI.getState().auth;
      console.log({isAuthenticated})
      let res;
      // const res = await axios.get(url,
      if (isAuthenticated){
        const { token } = thunkAPI.getState().auth.login;
        console.log({token})
        res =await axios.get(url,
          {
            headers: {
              Authorization: "Bearer " + token,
              // "Access-Control-Allow-Origin": "*",
              accept: "*/*",
              "Content-Type": "multipart/form-data",
              // "Content-Type": "application/json; charset=utf-8",
              // 'Authorization': `Bearer ${token}`
            },

        })

      } else {
        res = await axios.get(url);
    }
      const data = res.data.data;
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
      // console.error("errorTest", error.message);
    }
  }
);

///// ========= USER REGIIONS ======= ///////
// profinsi
export const getProvinsi = createAsyncThunk(
  "/get-list-province",
  async ({id}, thunkAPI) => {
    console.log({id})
    let url = `http://192.168.43.144:8080/get-list-province`;
    try {
      const { isAuthenticated } = thunkAPI.getState().auth;
      console.log({isAuthenticated})
      let res;
      // const res = await axios.get(url,
      if (isAuthenticated){
        const { token } = thunkAPI.getState().auth.login;
        console.log({token})
        res =await axios.post(url,JSON.stringify({id}),
          {
            headers: {
              Authorization: "Bearer " + token,
              accept: "*/*",
              "Content-Type": "multipart/form-data",
            },

        })

      } else {
        res = await axios.post(url);
    }
      const data = res.data.data;
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
      // console.error("errorTest", error.message);
    }
  }
);

// city
export const getCity = createAsyncThunk(
  "/get-list-city",
  async ({id},thunkAPI) => {
    console.log("city",{id})
    let url = `http://192.168.43.144:8080/get-list-city`;
    try {
      const { isAuthenticated } = thunkAPI.getState().auth;
      console.log({isAuthenticated})
      let res;
      // const res = await axios.get(url,
      if (isAuthenticated){
        const { token } = thunkAPI.getState().auth.login;
        console.log({token})
        res = await axios.post(url,JSON.stringify({id}),
          {
            headers: {
              Authorization: "Bearer " + token,
              accept: "*/*",
              "Content-Type": "multipart/form-data",
            },

        })

      } else {
        res = await axios.post(url);
    }
      const data = res.data.data;
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
      // console.error("errorTest", error.message);
    }
  }
);

// city
export const getDistrik = createAsyncThunk(
  "/get-list-district",
  async ({id}, thunkAPI) => {
    console.log({id})
    let url = `http://192.168.43.144:8080/get-list-district`;
    try {
      const { isAuthenticated } = thunkAPI.getState().auth;
      console.log({isAuthenticated})
      let res;
      // const res = await axios.get(url,
      if (isAuthenticated){
        const { token } = thunkAPI.getState().auth.login;
        console.log({token})
        res =await axios.post(url,JSON.stringify({id}),
          {
            headers: {
              Authorization: "Bearer " + token,
              accept: "*/*",
              "Content-Type": "multipart/form-data",
            },

        })

      } else {
        res = await axios.post(url);
    }
      const data = res.data.data;
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
      // console.error("errorTest", error.message);
    }
  }
);

// ======= END REGIONS ====== \\\\
// UPDATE
export const updateUsers = createAsyncThunk(
  "/update-profile",
  async ({name, countryId, provinceId, cityId, districtId, address},thunkAPI) => {
    console.log({name, countryId, provinceId, cityId, districtId, address})
    // const { token } = thunkAPI.getState().auth.login;
    let url = `http://192.168.43.144:8080/update-profile`
    try {
      const { isAuthenticated } = thunkAPI.getState().auth;
      let res;
      if (isAuthenticated){
        const { token } = thunkAPI.getState().auth.login;
        console.log({token})
        res = await axios.put(
         url,
         JSON.stringify({name,countryId,provinceId,cityId,districtId,address}),
        //  {name,countryId,provinceId,cityId,districtId,address},
          {
            headers: {
              Authorization: "Bearer " + token,
                // "Access-Control-Allow-Origin": "*",
                accept: "*/*",
                "Content-Type": "multipart/form-data",
            },
      });
      // return res.data.data;
    }else{
      res = await axios.put(url);
    }
    const data = res.data.data;
    return data;
  }catch (error) {
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





export const authSlice = createSlice({
  name: "auth",
  initialState: {
    register: {},
    login: {},
    user:{},
    userUpdate:{},
    province:{},
    city:{},
    district:{},
    error: "",
    loading: false,
    isAuthenticated:false,
  },
  reducers: {
    logout: (state) => {
      state.login = {
        isAuthenticated:false
      };
      state.register={};
    }
  },
  extraReducers: {
    // register
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.register = action.payload ? action.payload : {};
      console.log(state.register);
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // login
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.isAuthenticated=true
      state.login = action.payload ? action.payload : {};
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // get
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.isAuthenticated=true
      state.user = action.payload

      state.error = action.payload.message;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
// === REGIONS === \\ =========== = = = = = = = = = = = = =
    // PROVIN \\
    [getProvinsi.pending]: (state, action) => {
      state.loading = true;
    },
    [getProvinsi.fulfilled]: (state, action) => {
      state.loading = false;
      state.province = action.payload;
      console.log(state.province)
    },
    [getProvinsi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // CITY \\
    [getCity.pending]: (state, action) => {
      state.loading = true;
    },
    [getCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload;
      console.log(state.city)
    },
    [getCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //  DISTRIK \\
    [getDistrik.pending]: (state, action) => {
      state.loading = true;
    },
    [getDistrik.fulfilled]: (state, action) => {
      state.loading = false;
      state.district = action.payload;
      console.log(state.district)
    },
    [getDistrik.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    
// === END REGIONS === \\\ == = = = = = = = = = =  = = = =
    // update
    [updateUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      // state.user = action.payload
      // const updatePro = state.auth
      // state.userUpdate = action.payload ? action.payload : {};
      // console.log(state.user)
      state.userUpdate = action.payload ? action.payload : {};
    },
    [updateUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { logout } = authSlice.actions;

const { reducer } = authSlice;
export default reducer;
