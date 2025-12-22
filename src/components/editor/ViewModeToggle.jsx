import { useState } from 'react';

function ViewModeToggle() {
  const [activeMode, setActiveMode] = useState('preview');

  const modes = [
    { id: 'code', label: 'Code' },
    { id: 'preview', label: 'Preview' },
    { id: 'design', label: 'Design' },
  ];

  return (
    <div className="flex items-center bg-[#f7f4ed] rounded-[8px] p-0.5">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => setActiveMode(mode.id)}
          className={`font-[480] text-[13px] h-6 px-3 rounded-[6px] transition-all duration-200 ${
            activeMode === mode.id
              ? 'bg-white text-[#1c1c1c] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
              : 'bg-transparent text-[#5f5f5d] hover:text-[#1c1c1c]'
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}

export default ViewModeToggle;
