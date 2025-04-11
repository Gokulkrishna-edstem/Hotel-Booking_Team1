import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  hotelId: null,
  hotelName: "",
  hotelLocation: "",
  hotelrating: 0,
  hotelImage: "",
  roomType: "",
  roomImage: "",
  description: "",
  availability: false,
  price: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updateBooking(state, action) {
      return { ...state, ...action.payload };
    },
    clearBooking() {
      return initialState;
    },
  },
});

export const { updateBooking, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
