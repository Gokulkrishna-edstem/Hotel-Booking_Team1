import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  checkIn: "",
  checkOut: "",
  guests: 0,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    updateSearch(state, action) {
      state.location = action.payload.location;
      state.guests = action.payload.guests;
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
    },
    resetSearch() {
      return initialState;
    },
  },
});

export const { updateSearch, resetSearch } = hotelSlice.actions;
export default hotelSlice.reducer;
