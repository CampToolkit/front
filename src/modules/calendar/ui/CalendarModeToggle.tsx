import { IconButton, Tooltip } from '@mui/material';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import {
  useCalendarContext,
  CALENDAR_VIEW_MODE_OPTION,
} from '@/modules/calendar/providers/calendar-context.ts';

export default function CalendarModeToggle() {
  const { viewMode, setViewMode } = useCalendarContext();

  const isDayMode = viewMode === CALENDAR_VIEW_MODE_OPTION.DAY;

  const toggleView = () => {
    setViewMode(isDayMode ? CALENDAR_VIEW_MODE_OPTION.WEEK : CALENDAR_VIEW_MODE_OPTION.DAY);
  };

  return (
    <Tooltip title={isDayMode ? 'Переключить на неделю' : 'Переключить на день'}>
      <IconButton onClick={toggleView}>
        {isDayMode ? <CalendarViewWeekIcon /> : <CalendarViewDayIcon />}
      </IconButton>
    </Tooltip>
  );
}
