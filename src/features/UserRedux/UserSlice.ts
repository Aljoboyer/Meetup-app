import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../Pages/Models/DataModels';
import { API } from '../BaseApi';
import Swal from "sweetalert2";

export const AddingPost = createAsyncThunk(
  'counter/AddingPost',
  async (data: UserData) => {
    try {
      const response = await API.post("/user/createUser", data);
      return response;
    } catch (err) {console.log(err)}

  }
);

export const GetUsers = createAsyncThunk(
  'counter/GetUsers',
  async () => {
    console.log('slice hitted')
    try {
      const response = await API.get("/user/GetUsers");
      console.log('response', response)
      return response;
    } catch (err) {console.log(err)}

  }
);

export const EditUser = createAsyncThunk(
  'counter/EditUser',
  async (data: UserData) => {
    try {
      const response = await API.put("/user/EditUser", data);
      return response;
    } catch (err) {console.log(err)}

  }
);

export const DeleteUser = createAsyncThunk(
  'counter/DeleteUser',
  async (id: String) => {
    try {
      const response = await API.delete(`/user/DeleteUser/${id}`);
      return response;
    } catch (err) {console.log(err)}

  }
);

export interface AxiosResponse  {
  data: UserData[],
  status: number,
  statusText: string,
  headers: Record<string, string>,
  config: any,
  request?: any,
}

export interface UserState {
  users: UserData[],
}

const initialState: UserState = {
  users: [],
};

export const UserSlice = createSlice({
  name: 'MeetUpApp',
  initialState,
  reducers: {
    increment: (state) => {
      // state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(AddingPost.fulfilled, (state, action) => {
      Swal.fire(
        'Good job!',
        'User Created Successfully!',
        'success'
      )
    });
    builder.addCase(GetUsers.fulfilled, (state, action) => {
      const data: AxiosResponse | undefined = action.payload;
      state.users = data?.data !
    });
    builder.addCase(EditUser.fulfilled, (state, action) => {
      Swal.fire(
        'Good job!',
        'User Edited Successfully!',
        'success'
      )
    });
    builder.addCase(DeleteUser.fulfilled, (state, action) => {
      Swal.fire(
        'Good job!',
        'User Deleted Successfully!',
        'success'
      )
    });
  },
});

export const { increment} = UserSlice.actions;

export default UserSlice.reducer;
