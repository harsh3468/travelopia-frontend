import axios from "axios";

export const createUserBooking = (booking) => {
  return axios.post("/booking/details", {...booking,travelers_count:booking.travelersCount});
};

export const getUserBookingById = (userId) => {
  return axios.get("/booking/details/" + userId);
};
