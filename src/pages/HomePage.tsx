import DashboardCard from '../components/DashboardCard';
import LowStockCard from '../components/LowStock';
import RecentCard from '../components/RecentCard';

const HomePage = () => {
  return (
    <div className="p-4 grid grid-rows-2 grid-cols-4 gap-4">
      <div className="justify-center col-span-full">
        <h2 className="font-bold text-[2rem] rounded-lg">Dashboard</h2>
        <div className="flex justify-between">
          <DashboardCard count={5} title="Total Items" />
          <DashboardCard count={5} title="Total stock" />
          <DashboardCard count={5} title="Itens recentes" />
          <DashboardCard count={5} title="Itens acabando" />
        </div>
      </div>
      <div className="row-start-2 col-span-2">
        <h2>Recent items</h2>
        <RecentCard />
      </div>
      <div className="row-start-2 col-span-2">
        <h1>Low Stock</h1>
        <LowStockCard />
      </div>
    </div>
  );
};

export default HomePage;
