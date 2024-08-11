import css from "./Reviews.module.css";
import symbolDefs from "../icon/symbol-defs.svg";
import Reservation from "../Reservation/Reservation.jsx";
import { defaultPhoto } from "../utils/imgDedault.js";

const Reviews = ({ reviews }) => {
  const handleReservationSubmit = (reservationData) => {
    console.log("Reservation data submitted:", reservationData);
  };

  return (
    <div className={css.reviews}>
      <div className={css.commentWrap}>
        {reviews.map((review, index) => (
          <div key={index} className={css.review}>
            <div className={css.wrap}>
              <div className={css.photoWrap}>
                <img
                  src={review.photo || defaultPhoto}
                  alt={`${review.reviewer_name}'s photo`}
                  className={css.photo}
                />
              </div>
              <div className={css.nameWrap}>
                <h4 className={css.name}>{review.reviewer_name}</h4>
                <div className={css.stars}>
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`${css.star} ${
                        starIndex < review.reviewer_rating ? css.filled : ""
                      }`}
                    >
                      <use href={`${symbolDefs}#icon-star`} />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className={css.comment}>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={css.reservationWrap}>
        <Reservation onSubmit={handleReservationSubmit} />
      </div>
    </div>
  );
};

export default Reviews;
