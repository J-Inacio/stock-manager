// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './src/layouts/DefaultLayout';
import HomePage from './src/pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
