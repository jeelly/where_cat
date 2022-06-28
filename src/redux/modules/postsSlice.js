import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import instance from "../../shared/axios";

//미들웨어

// 게시글 불러오기
export const loadpostsDB = (page) => {
  return async function (dispatch, getState) {
    const response = await instance.get(`/posts`);
    dispatch(loadposts(response.data));
  };
};

const userSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
  },
  reducers: {
    loadposts: (state, action) => {
      console.log(action.payload)
      state.list = [...action.payload];
    },
  },
});

export const { loadposts } = userSlice.actions;
export default userSlice.reducer;
