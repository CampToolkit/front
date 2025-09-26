import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/home/HomePage.tsx';
import MainLayout from '@/common/components/layouts/MainLayout.tsx';
import CampsPage from '@/pages/camps/CampsPage';
import CampPage from '@/pages/camp/CampPage';

import UserProfile from '@/pages/user/UserProfile';
import CalendarPage from '@/pages/calendar/CalendarPage';
import WeekCalendar from '@/modules/calendar/ui/WeekCalendar.tsx';
import DayCalendar from '@/modules/calendar/ui/DayCalendar.tsx';
import PersonSchedulePage from '@/pages/person-schedule/PersonSchedulePage.tsx';
import AdditionalPracticeSchedulePage from '@/pages/additional-practice-schedule/AdditionalPracticeSchedulePage.tsx';

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
        path: '/camps/:campId',
        element: <CampPage />,
      },

      {
        path: 'profile',
        element: <UserProfile />,
      },
      {
        path: 'schedule/:campId/sportsman/:sportsmanId',
        element: <PersonSchedulePage />,
      },
      {
        path: 'schedule/:campId/additional-practice',
        element: <AdditionalPracticeSchedulePage />,
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
