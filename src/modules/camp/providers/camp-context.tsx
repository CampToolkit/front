import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

interface CampContextType {
  campId: number;
  setCampId: Dispatch<SetStateAction<number>>;
}

const CampContext = createContext<CampContextType | undefined>(undefined);

export const useCampContext = () => {
  const context = useContext(CampContext);
  if (context === undefined) {
    throw new Error('useCampContext must be used within a CampContextProvider');
  }
  return context;
};

interface CampProviderContextProps {
  children: ReactNode;
}
export const CampContextProvider = ({ children }: CampProviderContextProps) => {
  const [campId, setCampId] = useState(0);

  const values = useMemo(
    () => ({
      campId: campId,
      setCampId: setCampId,
    }),
    [campId],
  );

  return <CampContext.Provider value={values}>{children}</CampContext.Provider>;
};
