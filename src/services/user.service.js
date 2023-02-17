import axios from "axios";

export const createUserBooking = (booking) => {
  axios
    .post("/booking/details", booking)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserBookingById = (userId) => {
  axios
    .get("/booking/details/" + userId)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
