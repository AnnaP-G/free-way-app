import css from "./CamperItem.module.css";
import symbolDefs from "../icon/symbol-defs.svg";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import { useState } from "react";
import CamperModal from "../CamperModal/CamperModal.jsx";
import { useNavigate } from "react-router-dom";

const CamperItem = ({
  gallery,
  name,
  price,
  rating,
  location,
  description,
  reviews,
  details,
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((camper) => camper.id === id);
  });
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => {
      const newFavoriteStatus = !prev;
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      if (newFavoriteStatus) {
        const updatedFavorites = [
          ...favorites,
          {
            id,
            name,
            price,
            rating,
            location,
            description,
            gallery,
            reviews,
            details,
          },
        ];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      } else {
        const updatedFavorites = favorites.filter((camper) => camper.id !== id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }

      return newFavoriteStatus;
    });
  };

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
              <button
                className={css.favoriteButton}
                onClick={handleFavoriteClick}
              >
                <svg
                  className={css.svgHeart}
                  fill={isFavorite ? "red" : "none"}
                >
                  <use href={`${symbolDefs}#icon-heart`} />
                </svg>
              </button>
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
          <button
            className={css.camperButton}
            type="button"
            onClick={handleShowMoreClick}
          >
            Show more
          </button>
        </div>
      </li>

      {isModalOpen && (
        <CamperModal
          onClose={handleCloseModal}
          gallery={gallery}
          name={name}
          price={price}
          rating={rating}
          location={location}
          description={description}
          reviews={reviews}
          details={details}
        />
      )}
    </>
  );
};

export default CamperItem;
