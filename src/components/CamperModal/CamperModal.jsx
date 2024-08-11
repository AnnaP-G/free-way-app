import Features from "../Features/Features.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import css from "./CamperModal.module.css";
import symbolDefs from "../icon/symbol-defs.svg";
import { useEffect, useState } from "react";

const CamperModal = ({
  onClose,
  gallery,
  name,
  price,
  rating,
  location,
  description,
  reviews,
  details,
}) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleInfoClick = (infoType) => {
    setActiveTab(infoType);
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button type="button" className={css.closeButton} onClick={onClose}>
          <svg className={css.svgIcon}>
            <use href={`${symbolDefs}#icon-close`} />
          </svg>
        </button>
        <div className={css.camperModalContent}>
          <h2 className={css.camperName}>{name}</h2>
          <div className={css.camperPriceWrap}>
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
          <div>
            <p className={css.camperPrice}>€{price}.00</p>
          </div>
          <div className={css.gallery}>
            {gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} image ${index + 1}`}
                className={css.camperImg}
              />
            ))}
          </div>
          <p className={css.camperDescription}>{description}</p>
          <div className={css.Info}>
            <div
              className={css.InfoItem}
              onClick={() => handleInfoClick("features")}
            >
              <span>Features</span>
            </div>
            <div
              className={css.InfoItem}
              onClick={() => handleInfoClick("reviews")}
            >
              <span>Reviews</span>
            </div>
          </div>
          {activeTab === "features" && <Features details={details} />}
          {activeTab === "reviews" && <Reviews reviews={reviews} />}
        </div>
      </div>
    </div>
  );
};

export default CamperModal;
