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
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    adults,
    children,
    engine,
    transmission,
  } = details;

  return (
    <div className={css.detailsContainer}>
      <ul className={css.detailsList}>
        {airConditioner > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use
                href={`${symbolDefs}#icon-hotel-air`}
                width="20"
                height="20"
              />
            </svg>
            {airConditioner} Air conditioner
          </li>
        )}
        {bathroom > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-shower`} width="20" height="20" />
            </svg>
            {bathroom} Shower
          </li>
        )}
        {kitchen > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-kitchen`} width="20" height="20" />
            </svg>
            {kitchen} Kitchen
          </li>
        )}
        {beds > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-bed`} width="20" height="20" />
            </svg>
            {beds} Beds
          </li>
        )}
        {TV > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-TV`} width="20" height="20" />
            </svg>
            {TV} TV
          </li>
        )}
        {CD > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-cd`} width="20" height="20" />
            </svg>
            {CD} CD
          </li>
        )}
        {radio > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-radio`} width="20" height="20" />
            </svg>
            {radio} Radio
          </li>
        )}
        {toilet > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-toilet`} width="20" height="20" />
            </svg>
            {toilet} Toilet
          </li>
        )}
        {freezer > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-freezer`} width="20" height="20" />
            </svg>
            {freezer} Freezer
          </li>
        )}
        {hob > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-hob`} width="20" height="20" />
            </svg>
            {hob} Hob
          </li>
        )}
        {microwave > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use
                href={`${symbolDefs}#icon-microwave`}
                width="20"
                height="20"
              />
            </svg>
            {microwave} Microwave
          </li>
        )}
        {gas > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-gas`} width="20" height="20" />
            </svg>
            {gas} Gas
          </li>
        )}
        {adults > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-adult`} width="20" height="20" />
            </svg>
            {adults} Adults
          </li>
        )}
        {children > 0 && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-child`} width="20" height="20" />
            </svg>
            {children} Children
          </li>
        )}
        {engine && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use href={`${symbolDefs}#icon-engine`} width="20" height="20" />
            </svg>
            Engine: {engine}
          </li>
        )}
        {transmission && (
          <li className={css.detailsItem}>
            <svg className={css.svg}>
              <use
                href={`${symbolDefs}#icon-transmission`}
                width="20"
                height="20"
              />
            </svg>
            Transmission: {transmission}
          </li>
        )}
      </ul>
    </div>
  );
};

export default CamperDetails;
