import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { EarPart, EarSection } from '../types';
import { getEarPartById, getAllEarParts } from '../data/earData';

interface EarContextType {
  activeSection: EarSection;
  setActiveSection: (section: EarSection) => void;
  selectedPart: EarPart | null;
  setSelectedPart: (part: EarPart | null) => void;
  selectPartById: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: EarPart[];
}

const EarContext = createContext<EarContextType | undefined>(undefined);

export const useEar = () => {
  const context = useContext(EarContext);
  if (!context) {
    throw new Error('useEar must be used within an EarProvider');
  }
  return context;
};

interface EarProviderProps {
  children: ReactNode;
}

export const EarProvider: React.FC<EarProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<EarSection>('outer');
  const [selectedPart, setSelectedPart] = useState<EarPart | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const selectPartById = (id: string) => {
    const part = getEarPartById(id);
    if (part) {
      setSelectedPart(part);
      setActiveSection(part.section);
    }
  };

  useEffect(() => {
    setSelectedPart(null); // reset selection on section change
  }, [activeSection]);

  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return getAllEarParts().filter(part => 
      part.name.toLowerCase().includes(query) || 
      part.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <EarContext.Provider
      value={{
        activeSection,
        setActiveSection,
        selectedPart,
        setSelectedPart,
        selectPartById,
        searchQuery,
        setSearchQuery,
        searchResults
      }}
    >
      {children}
    </EarContext.Provider>
  );
};