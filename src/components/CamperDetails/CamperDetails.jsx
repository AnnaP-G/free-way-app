import css from "./CamperDetails.module.css";
import symbolDefs from "../icon/symbol-defs.svg";

const CamperDetails = ({ details }) => {
  const {
    airConditioner,
    bathroom,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
  } = details;

  return (
    <div className={css.detailsContainer}>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          {/* <svg className={css.svgHeart}>
            <use href={`${symbolDefs}#icon-heart`} />
          </svg> */}
          Air Conditioner: {airConditioner}
        </li>
        <li className={css.detailsItem}>Bathroom: {bathroom}</li>
        <li className={css.detailsItem}>Kitchen: {kitchen}</li>
        <li className={css.detailsItem}>Beds: {beds}</li>
        <li className={css.detailsItem}>TV: {TV}</li>
        <li className={css.detailsItem}>CD: {CD}</li>
        <li className={css.detailsItem}>Radio: {radio}</li>
        <li className={css.detailsItem}>Shower: {shower}</li>
        <li className={css.detailsItem}>Toilet: {toilet}</li>
        <li className={css.detailsItem}>Freezer: {freezer}</li>
        <li className={css.detailsItem}>Hob: {hob}</li>
        <li className={css.detailsItem}>Microwave: {microwave}</li>
        <li className={css.detailsItem}>Gas: {gas}</li>
        <li className={css.detailsItem}>Water: {water}</li>
      </ul>
    </div>
  );
};

export default CamperDetails;
