import React from "react";
import css from "./Features.module.css";
import Specs from "../Specs/Specs.jsx";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import Reservation from "../Reservation/Reservation.jsx";

const Features = ({ details, specs }) => {
  const handleReservationSubmit = (reservationData) => {
    console.log("Reservation data submitted:", reservationData);
  };

  return (
    <div className={css.features}>
      <div className={css.featuresWrap}>
        <div className={css.featuresSection}>
          <CamperDetails details={details} />
        </div>
        <div className={css.featuresSection}>
          <h3 className={css.specsTitle}>Vehicle Details</h3>
          <Specs specs={specs} />
        </div>
      </div>
      <div className={css.reservationWrap}>
        <Reservation onSubmit={handleReservationSubmit} />
      </div>
    </div>
  );
};

export default Features;
