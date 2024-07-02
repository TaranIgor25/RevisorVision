import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  popupOpen: boolean;
}

const initialState: IInitialState = {
  popupOpen: false,
};

const popupSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    openClosePopup(state: IInitialState, action: PayloadAction<boolean>) {
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
