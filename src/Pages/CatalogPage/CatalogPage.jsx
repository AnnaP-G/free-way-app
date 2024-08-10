import CamperList from "../../components/СamperList/CamperList.jsx";
import advert from "../../components/advert.json";
import css from './CatalogPage.module.css'

const CatalogPage = () => {
  return (
    <div className={css.catalogPageContainer}>
      <CamperList campers={advert} />
    </div>
  );
};

export default CatalogPage;
