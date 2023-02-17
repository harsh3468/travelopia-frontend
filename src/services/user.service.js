import axios from "axios";

export const createUserBooking = (booking) => {
  return axios.post("/booking/details", booking);
};

export const getUserBookingById = (userId) => {
  return axios.get("/booking/details/" + userId);
};
