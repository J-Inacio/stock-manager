import { useStock } from '../contexts/StockContext';

const RecentCard = () => {
  const { products, isLoading } = useStock();
  const recentItems = products.slice(0, 5);
  if (isLoading) {
    return <div className="p-4 text-center">Carregando itens recentes...</div>;
  }

  if (recentItems.length === 0) {
    return <div className="p-4 text-center">Nenhum item adicionado recentemente.</div>;
  }
  return (
    <table className="rounded-lg  bg-slate-700 text-start w-full">
      <thead>
        <tr className="bg-slate-800 ">
          <th className="px-4 text-start">Item</th>
          <th className="px-4 text-start">Quantidade</th>
          <th className="px-4 text-start">Data Adicionado</th>
        </tr>
      </thead>
      <tbody>
        {recentItems.map((item) => (
          <tr key={item.id}>
            <td className="px-4">{item.name}</td>
            <td className="px-4">{item.quantity}</td>
            <td className="px-4">{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentCard;
