import css from "./Specs.module.css";

const Specs = () => {
  const specs = {
    form: "fullyIntegrated",
    length: "9.45m",
    width: "2.65m",
    height: "3.95m",
    tank: "302l",
    consumption: "38l/100km",
  };

  return (
    <div className={css.specs}>
      <ul className={css.specsList}>
        <li className={css.specsItem}>
          <strong>Form</strong> {specs.form}
        </li>
        <li className={css.specsItem}>
          <strong>Length</strong> {specs.length}
        </li>
        <li className={css.specsItem}>
          <strong>Width</strong> {specs.width}
        </li>
        <li className={css.specsItem}>
          <strong>Height</strong> {specs.height}
        </li>
        <li className={css.specsItem}>
          <strong>Tank</strong> {specs.tank}
        </li>
        <li className={css.specsItem}>
          <strong>Consumption</strong> {specs.consumption}
        </li>
      </ul>
    </div>
  );
};

export default Specs;
