import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  tutor_id: null,
  student_id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userInfo = action.payload;
      console.log(action.payload, "payload");
    },
    resetState: (state) => {
      state.userInfo = initialState.userInfo;
      (state.student_id = null), (state.tutor_id = null);
    },
    setTutor_id: (state, action) => {
      state.tutor_id = action.payload;
      console.log(action.payload, "tutor_id redux");
    },
    setStudent_id: (state, action) => {
      state.student_id(action.payload);
      console.log(action.payload, "student_id redux");
    },
  },
});

export const { setUserDetails, setTutor_id, setStudent_id, resetState } =
  userSlice.actions;

export default userSlice.reducer;
