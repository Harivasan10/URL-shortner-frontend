import { createSlice } from '@reduxjs/toolkit';

export const Login = createSlice({
  name: 'login',
  initialState: {
    credentials: {email:'',password:''},
  },
  reducers: {
    LoginAction: (state, action) => {
        state.credentials = action.payload
    }
    }
});

export const { LoginAction } = Login.actions;

export default Login.reducer;
