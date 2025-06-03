import axios from "axios";
import { useEffect, useState } from "react";
import ProdutoCard from "../../Components/ProdutoCard";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=30")
      .then((res) => setProdutos(res.data.products))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  const filtrados = produtos.filter((produto) =>
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
