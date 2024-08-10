// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CatalogPage from "./Pages/CatalogPage/CatalogPage.jsx";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage.jsx";

// const HomePage = lazy(() => import("./Pages/HomePage/HomePage.jsx"));
// const CatalogPage = lazy(() => import("./Pages/CatalogPage/CatalogPage.jsx"));
// const FavoritesPage = lazy(() =>
//   import("./Pages/FavoritesPage/FavoritesPage.jsx")
// );

const App = () => {
  return (
    <div>
      <HomePage />
      <CatalogPage />
      <FavoritesPage />
    </div>
  );
};

export default App;
