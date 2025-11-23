import type React from 'react';

interface DashboardCardProps {
  title: string;
  count: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count }) => {
  return (
    <div className="rounded-lg bg-slate-700 h-24 text-center flex flex-col">
      <h3>{title}</h3>
      <p className="font-bold text-[2em]">{count}</p>
    </div>
  );
};

export default DashboardCard;
