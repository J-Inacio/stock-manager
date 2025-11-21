import { Outlet } from 'react-router';

const DefaultLayout = () => {
  return (
    <>
      <h1>teste default layout</h1>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
