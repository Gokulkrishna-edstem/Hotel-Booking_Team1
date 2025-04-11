import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./feature/hotelSlice";
import bookingReducer from "./feature/bookingSlice";

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    booking: bookingReducer,
  },
});

export default store;
