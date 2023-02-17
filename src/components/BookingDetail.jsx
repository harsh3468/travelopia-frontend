import React, { useEffect, useState } from "react";
import { getUserBookingById } from "../services/user.service";
import Logo from "../resources/icons/logo.svg";
export default function BookingDetail() {
  const [Detail, setDetail] = useState({});

  useEffect(async () => {
    const id = localStorage.getItem("id");
    const { data } = await getUserBookingById(id);
    setDetail({
      ...data.booking[0],
    });
  }, []);

  return (
    <>
      <div className="image__container">
        <img src={Logo} alt="TravelOpia" />
      </div>
      <div className="details__container">
        {Detail ? (
          Object.keys(Detail).map((item) => {
            return (
              <div className="detail__container" key={item}>
                <h3>{item.toUpperCase()}</h3>
                <div>
                  <p>{Detail[item]}</p>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
