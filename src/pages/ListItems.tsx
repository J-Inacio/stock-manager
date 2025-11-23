import { useStock } from '../contexts/StockContext';

const ListItems = () => {
  const { products, removeProduct, updateProductQuantity } = useStock();

  return (
    <div>
      <h2 className="text-xl mb-4">Produtos em Estoque ({products.length})</h2>
      {products.map((product) => (
        <div key={product.id} className="p-3 my-2 border rounded">
          <p className="font-bold">{product.name}</p>
          <p>Qtd: {product.quantity}</p>

          <button onClick={() => removeProduct(product.id)} className="text-red-500 mr-4">
            Remover
          </button>

          <button
            onClick={() => updateProductQuantity(product.id, product.quantity + 1)}
            className="text-green-500"
          >
            Adicionar 1
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
