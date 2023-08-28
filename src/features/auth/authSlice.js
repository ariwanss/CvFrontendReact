import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
    return await authService.registerAxios(user)
  } catch (error) {
    const message = error.response.data.error || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.loginAxios(user)
  } catch (error) {
    const message = error.response.data.error || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    user: null
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ""
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.message = action.payload
      })
  }
})

export const {} = authSlice.actions
export default authSlice.reducer
