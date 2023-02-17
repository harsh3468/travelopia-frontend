import axios from "axios"

export const createUserBooking = (booking)=>{
    axios.post("/booking/details",booking);
}


export const getUserBookingById = (userId)=>
{
    axios.post("/booking/details",userId);
}
