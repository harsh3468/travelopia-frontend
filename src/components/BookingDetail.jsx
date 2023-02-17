import React, { useEffect, useState } from "react";

import {getUserBookingById}  from "../services/user.service"
export default function BookingDetail() {
 
  const [Detail,setDetail] = useState("")
  useEffect(()=>{
   const id =  localStorage.getItem("id");
   setDetail( getUserBookingById(id));

  },[])

  return( 
  <div>
      {
        Detail
      }
  </div>
  );
}
