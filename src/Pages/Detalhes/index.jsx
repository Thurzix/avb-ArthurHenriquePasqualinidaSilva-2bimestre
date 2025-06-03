import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavorites } from "../../Context/FavoritesContext";

export default function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const { isFavorito, toggleFavorito } = useFavorites();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduto(res.data))
      .catch((err) => console.error("Erro ao buscar produto:", err));
  }, [id]);

  if (!produto) return <p>Carregando detalhes...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{produto.title}</h2>
      <img
        src={produto.thumbnail}
        alt={produto.title}
        className="w-80 h-80 object-cover rounded mb-4"
      />
      <p className="mb-2">{produto.description}</p>
      <p className="font-semibold mb-2">Preço: ${produto.price}</p>
      <button
        onClick={() => toggleFavorito(produto.id)}
        className="text-red-500 text-xl"
        title="Favoritar"
      >
        {isFavorito(produto.id) ? "❤️ Remover dos favoritos" : "🤍 Adicionar aos favoritos"}
      </button>
    </div>
  );
}
