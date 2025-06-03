import axios from "axios";
import { useEffect, useState } from "react";
import { useFavorites } from "../../Context/FavoritesContext";
import ProdutoCard from "../../Components/ProdutoCard";

export default function Favoritos() {
  const { favoritos } = useFavorites();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    if (favoritos.length === 0) {
      setProdutos([]);
      return;
    }

    Promise.all(
      favoritos.map((id) =>
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => res.data)
      )
    )
      .then(setProdutos)
      .catch((err) => console.error("Erro ao carregar favoritos:", err));
  }, [favoritos]);

  if (favoritos.length === 0)
    return <p className="p-4">Nenhum produto favoritado ainda.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Seus Favoritos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            id={produto.id}
            title={produto.title}
            price={produto.price}
            thumbnail={produto.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
