import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState(() =>
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=30")
      .then(res => setProdutos(res.data.products))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  const toggleFavorito = (id) => {
    const atualizados = favoritos.includes(id)
      ? favoritos.filter(fav => fav !== id)
      : [...favoritos, id];

    setFavoritos(atualizados);
    localStorage.setItem("favoritos", JSON.stringify(atualizados));
  };

  const filtrados = produtos.filter(produto =>
    produto.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>

      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="p-2 border mb-4 w-full max-w-md rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtrados.map((produto) => (
          <div key={produto.id} className="border rounded shadow p-4">
            <img src={produto.thumbnail} alt={produto.title} className="h-40 w-full object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{produto.title}</h3>
            <p className="text-sm text-gray-600 mb-1">${produto.price}</p>
            <div className="flex justify-between items-center mt-2">
              <Link to={`/detalhes/${produto.id}`} className="text-blue-500 hover:underline text-sm">Ver detalhes</Link>
              <button
                onClick={() => toggleFavorito(produto.id)}
                className="text-red-500 text-xl"
                title="Favoritar"
              >
                {favoritos.includes(produto.id) ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
