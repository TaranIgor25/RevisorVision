import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "favorites",
  initialState: {
    popupOpen: false,
  },
  reducers: {
    openClosePopup(state: any, action: PayloadAction<boolean>) {
      switch (action.payload) {
        case true:
          state.popupOpen = true;
          break;
        case false:
          state.popupOpen = false;
          break;
      }
    },
  },
});

export const { openClosePopup } = popupSlice.actions;
export default popupSlice.reducer;
