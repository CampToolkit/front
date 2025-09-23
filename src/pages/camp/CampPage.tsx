import { CampContextProvider } from '@/modules/camp/providers/camp-context.tsx';
import Camp from '@/modules/camp/Camp.tsx';

export default function CampPage() {
  return (
    <CampContextProvider>
      <Camp />
    </CampContextProvider>
  );
}
