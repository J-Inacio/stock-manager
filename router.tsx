// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './src/layouts/DefaultLayout';
import HomePage from './src/pages/HomePage';
import ListItems from './src/pages/ListItems';
import NewItem from './src/pages/NewItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/new-item',
        element: <NewItem />,
      },
      {
        path: '/list-items',
        element: <ListItems />,
      },
    ],
  },
]);

export default router;
