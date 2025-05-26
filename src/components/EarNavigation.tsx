import React from 'react';
import { useEar } from '../context/EarContext';
import { EarSection } from '../types';

export const EarNavigation: React.FC = () => {
  const { activeSection, setActiveSection } = useEar();

  const sections: { id: EarSection; label: string }[] = [
    { id: 'outer', label: 'Telinga Luar' },
    { id: 'middle', label: 'Telinga Tengah' },
    { id: 'inner', label: 'Telinga Dalam' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeSection === section.id
              ? 'bg-accent-100 text-accent-800 font-medium'
              : 'hover:bg-gray-100'
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};