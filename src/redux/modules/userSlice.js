import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [
    {
      userId: "test123",
      nickName: "보람이테스트",
      password: "test1234!",
      confirmPassword: "test1234!",
      phoneNum: "01049546299",
      email: "930802qhfka@gmail.com",
      userLocation: "전라북도 전주시 완산구 서신동",
      favorability: "0",
    },
  ],
};

//유저 이메일 인증
export const userEmail = createAsyncThunk(
  "userEmail/userEmailCheck",
  async (user_email) => {
    try {
      const response = await axios.post(
        "http://43.200.104.97/api/users/mail",
        user_email
      );
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
);

export const userInfoSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
  },
  extraReducers: {
  }
});


export const postActions = userInfoSlice.actions
export default userInfoSlice.reducer
