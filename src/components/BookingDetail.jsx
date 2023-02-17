import React, { useEffect, useState } from "react";

import { getUserBookingById } from "../services/user.service";
export default function BookingDetail() {
  const [Detail, setDetail] = useState({
    name: "abc",
    email: "adsjfkl",
    destination: "kasld;f",
    travelersCount: ";ajksfdl ",
    budget: ";jlkasdf",
    currency: "alks;dfj;laksd",
  });

  useEffect(async () => {
    const id = localStorage.getItem("id");
    setDetail( await getUserBookingById(id));
  }, []);
  console.log(Detail);

  return (
    <div>
      {Detail ? (
        Object.keys(Detail).map((item) => {
          return (
            <div className="details__container">
              <h2>{item}</h2>
              <p>{Detail[item]}</p>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
