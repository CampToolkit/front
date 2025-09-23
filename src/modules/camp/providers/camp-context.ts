import { createContext, type Dispatch, type SetStateAction, useContext } from 'react';
import type { Camp } from '@/common/api/camp/CampApi.type.ts';

interface CampContextType {
  camp: Camp | null;
  setCamp: Dispatch<SetStateAction<Camp | null>>;
}

export const CampContext = createContext<CampContextType | undefined>(undefined);

export const useCampContext = () => {
  const context = useContext(CampContext);
  if (context === undefined) {
    throw new Error('useCampContext must be used within a CampContextProvider');
  }
  return context;
};
