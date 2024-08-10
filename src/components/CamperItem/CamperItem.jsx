import css from "./CamperItem.module.css";
import symbolDefs from "../icon/symbol-defs.svg";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";

const CamperItem = ({
  gallery,
  name,
  price,
  rating,
  location,
  description,
  reviews,
  details,
}) => {
  const imageUrl = gallery?.[0] || "default-image-url";
  return (
    <>
      <li className={css.camperItem}>
        <img src={imageUrl} alt={name} className={css.camperImg} />
        <div className={css.camperItemDetails}>
          <div className={css.camperItemTitle}>
            <h2 className={css.camperName}>{name}</h2>
            <div className={css.camperPriceWrap}>
              <p className={css.camperPrise}>€{price}.00</p>
              <svg className={css.svgHeart}>
                <use href={`${symbolDefs}#icon-heart`} />
              </svg>
            </div>
          </div>
          <div className={css.camperRatingWrap}>
            <svg className={css.svgStar}>
              <use href={`${symbolDefs}#icon-star`} />
            </svg>
            <p className={css.camperRating}>
              {rating} ({reviews.length} Reviews)
            </p>
            <svg className={css.svgMap}>
              <use href={`${symbolDefs}#icon-map-pin`} />
            </svg>
            <p className={css.camperLocation}>{location}</p>
          </div>
          <div className={css.camperItemWrap}>
            <p className={css.camperDescription}>{description}</p>
          </div>
          <CamperDetails details={details} />
        </div>
        <div>
          <button className={css.camperButton} type="button">
            Show more
          </button>
        </div>
      </li>
    </>
  );
};

export default CamperItem;
