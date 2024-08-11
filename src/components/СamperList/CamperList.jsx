// src/components/CamperList/CamperList.jsx

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CamperItem from "../CamperItem/CamperItem.jsx";
import Location from "../Location/Location.jsx";
import css from "./CamperList.module.css";
import { fetchCampers } from "../../redux/operations.js";
import {
  selectVisibleCampers,
  selectCurrentPage,
  selectIsError,
  selectIsLoading,
  selectPerPage,
} from "../../redux/selectors.js";
import { setCurrentPage } from "../../redux/slice.js";
import Loader from "../Loader/Loader.jsx";

const CamperList = () => {
  const dispatch = useDispatch();
  const visibleCampers = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchCampers()); // Завантажити перші картки при завантаженні компонента
    } else {
      dispatch(fetchCampers(currentPage)); // Завантажити наступні картки при натисканні кнопки
    }
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <>
      {isLoading && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
      <div className={css.camperListContainer}>
        <Location />
        {isError && <p>Something went wrong!</p>}
        <ul className={css.camperList}>
          {visibleCampers.map(
            ({
              name,
              rating,
              location,
              price,
              gallery,
              _id,
              description,
              reviews,
              details,
            }) => (
              <CamperItem
                key={_id}
                id={_id}
                name={name}
                rating={rating}
                location={location}
                price={price}
                gallery={gallery}
                description={description}
                reviews={reviews}
                details={details}
              />
            )
          )}
          {visibleCampers.length % perPage === 0 && !isLoading && (
            <button className={css.loadMoreButton} onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default CamperList;
