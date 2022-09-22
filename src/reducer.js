import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requestData: {},
  responseItems: [],
};

export const userReducer = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setRequest: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.requestData = action.payload;
    },
    setResponseItems: (state, action) => {
      state.responseItems = action.payload;
    },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setRequest, setResponseItems } = userReducer.actions;
export const selectItems = state => state.userData.responseItems;
export default userReducer.reducer;
