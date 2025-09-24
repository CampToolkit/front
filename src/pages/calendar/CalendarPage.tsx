import Calendar from '@/modules/calendar/ui/Calendar.tsx';
import { CalendarContextProvider } from '@/modules/calendar/providers/calendar-context-provider.tsx';

export default function CalendarPage() {
  return (
    <CalendarContextProvider>
      <Calendar />
    </CalendarContextProvider>
  );
}
