import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/home/HomePage.tsx';
import MainLayout from '@/shared/components/layouts/MainLayout.tsx';
import CampsPage from '@/pages/camps/CampsPage';
import CampPage from '@/pages/camp/CampPage';
import CampDetailsPage from '@/pages/camp/CampDetailsPage';
import CampSportsmenPage from '@/pages/camp/CampSportsmenPage';
import CampGroupsPage from '@/pages/camp/CampGroupsPage';
import UserProfile from '@/pages/user/UserProfile';
import CalendarPage from '@/pages/calendar/CalendarPage';
import WeekCalendar from '@/shared/components/calendar/WeekCalendar';
import DayCalendar from '@/shared/components/calendar/DayCalendar';

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
      {
        path: 'user-profile',
        element: <UserProfile />,
      },
      {
        path: 'calendar',
        element: <CalendarPage />,
        children: [
          {
            path: 'weeks',
            element: null,
          },
          {
            index: true,
            // path: 'week',
            element: <WeekCalendar />,
          },
          {
            path: 'day',
            element: <DayCalendar />,
          },
        ],
      },
    ],
  },
]);

export { router };
