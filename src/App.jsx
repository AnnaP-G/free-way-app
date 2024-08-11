import { Route, Routes } from "react-router-dom";
import Features from "./components/Features/Features.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import CamperModal from "./components/CamperModal/CamperModal.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./Pages/CatalogPage/CatalogPage.jsx"));
const FavoritesPage = lazy(() =>
  import("./Pages/FavoritesPage/FavoritesPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./Pages/NotFoundPage/NotFoundPage.jsx")
);

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperModal />}></Route>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
