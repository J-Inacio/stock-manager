import { Outlet } from 'react-router';
import Header, { type LinkItem } from '../components/Header';

const navLinks: LinkItem[] = [
  { name: 'Início', path: '/' },
  { name: 'Itens', path: '/list-items' },
  { name: 'Novo Item', path: '/new-item' },
];

const DefaultLayout = () => {
  return (
    <div className="h-screen text-neutral-50 ">
      <Header links={navLinks} />
      <h1 className="text-">teste default layout</h1>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
