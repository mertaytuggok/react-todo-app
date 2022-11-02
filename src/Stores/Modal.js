import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: false,
  data: false,
  open: false,
};
const Modal = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.name = action.payload.name;
      state.data = action.payload?.data || false;
      state.open = true;
    },
    closeModal: (state) => {
      state.name = false;
      state.data = false;
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = Modal.actions;
export default Modal.reducer;
