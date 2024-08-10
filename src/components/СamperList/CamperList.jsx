import CamperItem from "../CamperItem/CamperItem.jsx";
import Location from "../Location/Location.jsx";
import css from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  return (
    <div className={css.camperListContainer}>
      <Location />
      <ul className={css.camperList}>
        {campers.map(
          ({
            name,
            rating,
            location,
            price,
            gallery,
            _id,
            details,
            reviewCount,
          }) => (
            <CamperItem
              key={_id}
              id={_id}
              name={name}
              rating={rating}
              location={location}
              price={price}
              gallery={gallery}
              details={details}
              reviewCount={reviewCount}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default CamperList;
