import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduto(res.data))
      .catch(err => console.error("Erro ao buscar produto:", err));
  }, [id]);

  if (!produto) return <p>Carregando detalhes...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{produto.title}</h2>
      <img src={produto.thumbnail} alt={produto.title} className="w-64 h-64 object-cover mb-4 rounded" />
      <p className="mb-2">{produto.description}</p>
      <p className="font-semibold">Preço: ${produto.price}</p>
      <p className="text-sm text-gray-600">Categoria: {produto.category}</p>
    </div>
  );
}
