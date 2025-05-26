import React, { useEffect } from 'react';
import { useEar } from '../context/EarContext';
import { EarModel } from './EarModel';
import { EarPartDetails } from './EarPartDetails';
import { EarNavigation } from './EarNavigation';

export const EarAnatomy: React.FC = () => {
  const { activeSection, selectedPart, setSelectedPart } = useEar();

  // Reset selected part when section changes
  useEffect(() => {
    setSelectedPart(null);
  }, [activeSection]);

  return (
    <div className="container mx-auto px-4 py-6">
      <EarNavigation />
      
      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        {/* 3D Model Section */}
        <div className="lg:w-1/2 h-[500px] card relative">
          <div className="absolute top-4 left-4 z-10">
            <h2 className="text-lg font-medium">
              {activeSection === 'outer' ? 'Outer Ear' : 
               activeSection === 'middle' ? 'Middle Ear' : 'Inner Ear'}
            </h2>
          </div>
          <EarModel />
        </div>
        
        {/* Information Panel */}
        <div className="lg:w-1/2">
          <EarPartDetails part={selectedPart} />
        </div>
      </div>
    </div>
  );
};