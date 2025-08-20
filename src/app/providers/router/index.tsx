import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/home/HomePage.tsx';
import MainLayout from '@/shared/components/layouts/MainLayout.tsx';
import CampsPage from '@/pages/camps/CampsPage';
import CampPage from '@/pages/camp/CampPage';
import CampDetailsPage from '@/pages/camp/CampDetailsPage';
import CampSportsmenPage from '@/pages/camp/CampSportsmenPage';
import CampGroupsPage from '@/pages/camp/CampGroupsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/camps',
        element: <CampsPage />,
      },
      {
        path: '/camps/:id',
        element: <CampPage />,
        children: [
          {
            path: 'details',
            element: <CampDetailsPage />,
          },
          {
            path: 'sportsmen',
            element: <CampSportsmenPage />,
          },
          {
            path: 'groups',
            element: <CampGroupsPage />,
          },
        ],
      },
    ],
  },
]);

export { router };
