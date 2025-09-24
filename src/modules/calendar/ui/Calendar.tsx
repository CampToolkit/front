import { Box } from '@mui/material';
import PageTitle from '@/common/components/PageTitle.tsx';

import WeekCalendar from '@/modules/calendar/ui/WeekCalendar.tsx';
import DayCalendar from '@/modules/calendar/ui/DayCalendar.tsx';
import {
  CALENDAR_VIEW_MODE_OPTION,
  type CalendarViewModeType,
  useCalendarContext,
} from '@/modules/calendar/providers/calendar-context.ts';
import type { TabType } from '@/common/types/tabs.type.ts';
import CalendarModeToggle from '@/modules/calendar/ui/CalendarModeToggle.tsx';

type ModeTabsType<T extends string> = Record<T, TabType>;
const TABS: ModeTabsType<CalendarViewModeType> = {
  [CALENDAR_VIEW_MODE_OPTION.DAY]: {
    name: 'День',
    path: 'day-calendar',
    component: DayCalendar,
  },
  [CALENDAR_VIEW_MODE_OPTION.WEEK]: {
    name: 'Неделя',
    path: 'week-calendar',
    component: WeekCalendar,
  },
};

export default function Calendar() {
  const { viewMode } = useCalendarContext();

  const CurrentTab = TABS[viewMode].component;

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <PageTitle title="Расписание" showBackButton={true} />
        <CalendarModeToggle />
      </Box>
      <CurrentTab />
    </Box>
  );
}
