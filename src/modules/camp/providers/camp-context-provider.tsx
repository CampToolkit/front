import { type ReactNode, useMemo, useState } from 'react';
import type { Camp } from '@/common/api/camp/CampApi.type.ts';
import { CampContext } from './camp-context';

interface CampProviderContextProps {
  children: ReactNode;
}
export const CampContextProvider = ({ children }: CampProviderContextProps) => {
  const [camp, setCamp] = useState<Camp | null>(null);

  const values = useMemo(
    () => ({
      camp,
      setCamp,
    }),
    [camp],
  );

  return <CampContext.Provider value={values}>{children}</CampContext.Provider>;
};
