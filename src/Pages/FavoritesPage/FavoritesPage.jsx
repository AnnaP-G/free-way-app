import { useState, useEffect } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((camper) => (
            <li key={camper.id}>
              <img
                src={camper.gallery?.[0] || "default-image-url"}
                alt={camper.name}
              />
              <h2>{camper.name}</h2>
              <p>Price: €{camper.price}.00</p>
              <p>Rating: {camper.rating}</p>
              <p>Location: {camper.location}</p>
              <p>Description: {camper.description}</p>
              {/* Add more camper details here if needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
