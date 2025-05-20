import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=10")
      .then(res => setProdutos(res.data.products))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Produtos</h2>
      <ul className="space-y-3">
        {produtos.map((produto) => (
          <li key={produto.id} className="border p-3 rounded shadow">
            <Link to={`/detalhes/${produto.id}`} className="text-blue-600 hover:underline">
              {produto.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
