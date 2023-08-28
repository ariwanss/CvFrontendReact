import { createSlice } from "@reduxjs/toolkit";
import { cvItems } from "./cvItems";

const cvSlice = createSlice({
  name: "cv",
  initialState: cvItems,
  reducers: {

  }
})

export const selectItemsBySection = (state, section) => {
  return state.cv.filter((item) => item.section == section)  
}

export const selectSections = (state) => {
  return Array.from(new Set(state.cv.map((item) => item.section)))
}

export default cvSlice.reducer