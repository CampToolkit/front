import Camp from '@/modules/camp/Camp.tsx';
import { CampContextProvider } from '@/modules/camp/providers/camp-context-provider';

export default function CampPage() {
  return (
    <CampContextProvider>
      <Camp />
    </CampContextProvider>
  );
}
