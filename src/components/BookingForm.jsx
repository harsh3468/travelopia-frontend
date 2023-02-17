import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserBooking,
  getUserBookingById,
} from "../services/user.service";

export default function BookingForm() {
  const defaultform = {
    name: "",
    email: "",
    destination: "",
    travelersCount: " ",
    budget: "",
    currency: "",
  };
  
  const [booking, setBooking] = useState(defaultform);
  
  const { name, email, destination, travelersCount, budget, currency } =
    booking;

  const navigate = useNavigate();
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setBooking({ ...booking, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooking(defaultform);
    const userId = createUserBooking(booking);
    localStorage.setItem({ id: userId });

    navigate("/booking/detail");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="">Name</label>
          <input
            type={"text"}
            name="name"
            value={name}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type={"text"}
            name="email"
            value={email}
            onChange={handleChange}
            required
            email
          ></input>
        </div>

        <div>
          <label htmlFor="">Destination</label>
          <select
            onChange={handleChange}
            value={destination}
            name="destination"
          >
            <option key={1}>INDIA</option>
            <option key={2}>AFRICA</option>
            <option key={3}>EUROPE</option>
          </select>
        </div>

        <div>
          <label htmlFor="">TravlersCount</label>
          <input
            type={"text"}
            name="travelersCount"
            value={travelersCount}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="">Budget</label>
          <input
            type={"text"}
            name="budget"
            value={budget}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="">Currency</label>
          <input
            type={"text"}
            name="currency"
            value={currency}
            onChange={handleChange}
            required
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
