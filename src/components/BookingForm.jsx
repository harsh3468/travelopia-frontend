import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserBooking,
  getUserBookingById,
} from "../services/user.service";
import { Input } from "./Input";
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
    
      <form onSubmit={handleSubmit} className="form__container" >
        
          <Input
            label={"Name"}
            type={"text"}
            name="name"
            value={name}
            onChange={handleChange}
            required
            email
          />
        

     
          <Input
            label={"Email"}
            type={"text"}
            name="email"
            value={email}
            onChange={handleChange}
            required
            email
          />
       

        <div className="destination__container">
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

        
          <Input
            label={"Travlers"}
            type={"text"}
            name="travelersCount"
            value={travelersCount}
            onChange={handleChange}
          />
        

        
          <Input
            label={"Budget"}
            type={"text"}
            name="budget"
            value={budget}
            onChange={handleChange}
            required
          />
      

       
          <Input
            label={"Currency"}
            type={"text"}
            name="currency"
            value={currency}
            onChange={handleChange}
            required
          />
        
        <button type="submit">Submit</button>
      </form>
      
    </>
  );
}
