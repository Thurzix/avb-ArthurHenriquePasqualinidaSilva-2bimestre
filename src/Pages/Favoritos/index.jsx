import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favoritos() {
  const [produtos, setProdutos] = useState([]);
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  useEffect(() => {
    Promise.all(favoritos.map(id =>
      axios.get(`https://dummyjson.com/products/${id}`).then(res => res.data)
    )).then(setProdutos)
      .catch(err => console.error("Erro ao carregar favoritos:", err));
  }, []);

  if (favoritos.length === 0) return <p className="p-4">Nenhum produto favoritado ainda.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Seus Favoritos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <div key={produto.id} className="border rounded shadow p-4">
            <img src={produto.thumbnail} alt={produto.title} className="h-40 w-full object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{produto.title}</h3>
            <p className="text-sm text-gray-600 mb-1">${produto.price}</p>
            <Link to={`/detalhes/${produto.id}`} className="text-blue-500 hover:underline text-sm">Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
