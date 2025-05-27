import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const isFavorito = (id) => favoritos.includes(id);

  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
