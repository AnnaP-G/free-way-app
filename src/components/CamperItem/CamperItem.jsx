import css from "./CamperItem.module.css";
import symbolDefs from "../icon/symbol-defs.svg";
// import CamperDetails from "../CamperDetails/CamperDetails.jsx";

const CamperItem = ({
  gallery,
  name,
  price,
  rating,
  location,
  details,
  reviewCount,
}) => {
  const imageUrl = gallery?.[0] || "default-image-url";
  return (
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
          <p className={css.camperRating}>{rating}</p>
          <p className={css.reviewCount}>({reviewCount} Reviews)</p>
          <svg className={css.svgMap}>
            <use href={`${symbolDefs}#icon-map-pin`} />
          </svg>
          <p className={css.camperLocation}>{location}</p>
        </div>
        <div className={css.camperItemWrap}>
          <p className={css.camperInfo}>
            The pictures shown here are example vehicles of the respective.
          </p>
        </div>
        {/* <CamperDetails details={details} /> */}
      </div>
    </li>
  );
};

export default CamperItem;
