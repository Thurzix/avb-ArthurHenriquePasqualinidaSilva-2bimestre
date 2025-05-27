import { Link } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesContext";

export default function ProdutoCard({ id, title, price, thumbnail }) {
  const { toggleFavorito, isFavorito } = useFavorites();

  return (
    <div className="border rounded shadow p-4">
      <img
        src={thumbnail}
        alt={title}
        className="h-40 w-full object-cover rounded mb-2"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mb-1">${price}</p>
      <div className="flex justify-between items-center mt-2">
        <Link
          to={`/detalhes/${id}`}
          className="text-blue-500 hover:underline text-sm"
        >
          Ver detalhes
        </Link>
        <button
          onClick={() => toggleFavorito(id)}
          className="text-red-500 text-xl"
          title="Favoritar"
        >
          {isFavorito(id) ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
