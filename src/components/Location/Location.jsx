import css from "./Location.module.css";
import symbolDefs from "../icon/symbol-defs.svg";

const Location = () => {
  return (
    <div className={css.LocationContainer}>
      <label className={css.locationLabel}>Location</label>
      <div className={css.inputWrap}>
        <svg className={css.svgMap}>
          <use href={`${symbolDefs}#icon-map-pin`} />
        </svg>
        <input
          className={css.locationInput}
          type="text"
          placeholder="Location"
        />
      </div>
    </div>
  );
};

export default Location;
