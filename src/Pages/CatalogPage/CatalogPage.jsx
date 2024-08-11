import CamperList from "../../components/СamperList/CamperList.jsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.catalogPageContainer}>
      <CamperList />
    </div>
  );
};

export default CatalogPage;
