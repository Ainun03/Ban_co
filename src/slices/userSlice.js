import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/user/userService';
import axios from 'axios';
import { toast } from "react-toastify";

export const getAllUsers = createAsyncThunk(
  "/users",
  async ({ token }) => {
    try {
      return await (await userService.getAllUsers({ token })).data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
    
export const getUsers = createAsyncThunk(
  "/profile",
  async ({token},thunkAPI) => {
    try {
      const res = await userService.getUsers({token})
      const {data} = res.data.data
      console.log(data)
      return data;
      // return res.data.data;
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

// export const getUsers = createAsyncThunk(
//   "/profile",
//   async ({token,email, password,}) => {
//     // console.log({ token })
//     // const url = `http://localhost:8080/profile`;
//     try {
//       // return await userService.getUsers({token})
//       // return await (await userService.getUsers({token})).data.data
//       // const res = await axios.get(url,
//         // JSON.stringify({ }),

//       // return await (await userService.getUsers(JSON.stringify({token}))).data.data
//       const res = await userService.getUsers({email, password,token})
//       // {
//       //   headers: {
//       //     // "accept": "*/*",
//       //     "Authorization": "Bearer " + token,
//       //     // "Content-Type": "multipart/form-data",   
          
//       //   }
//       // }
//       // ) 
//       return res.data.data;
//     } catch (error) {
//       console.error("errorTest", error.message);
//     }
//   }
// );

// update

export const updateUsers = createAsyncThunk(
  "/update-profile",
  async ({ name, countryId, provinceId, cityId, districtId, address}) => {
    console.log({name, countryId, provinceId, cityId, districtId, address})
    const url = `http://localhost:8080/update-profile`
    try {
      const res = await axios.put(
        url,
        JSON.stringify({ 
          name,
          countryId,
          provinceId,
          cityId,
          districtId,
          address,
         }),
        {
          headers: {
            accept: "*/*",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data.data;
    } catch (error) {
      console.error("errorTest", error.message);
    }
  }
);

const userSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    list: [],
    error: "",
    loading: false
  },
  reducers: {
    clearData: (state) => {
      state.list = [];
      state.data = {};
    },
    restData: (state, action) => {
      // state.data = (state.list.filter(item => item.userId == action.payload)[0]);
      state.data = action.payload ? action.payload : {};
    },
    fillData: (state, action) => {
      state.data = (state.list.filter(item => item.id == action.payload)[0]);
    }
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      // state.profile = action.payload ? action.payload : {};
      state.profile = action.payload
      console.log(state.profile)
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      // state.error = action.payload.message;
    },
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload ? action.payload : [];
      console.log(state.profile)
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // update
    [updateUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload ? action.payload : {};
      console.log(state.profile)
    },
    [updateUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  }
});

export const { clearData, fillData, restData } = userSlice.actions;

const { reducer } = userSlice;
export default reducer;