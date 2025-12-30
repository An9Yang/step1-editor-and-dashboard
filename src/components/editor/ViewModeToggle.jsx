import { useState } from 'react';

function ViewModeToggle({ activeMode, onModeChange }) {
  // const [activeMode, setActiveMode] = useState('preview'); // Controlled by parent now

  // Code icon - </> brackets
  const CodeIcon = ({ active }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={active ? "rgb(28, 28, 28)" : "rgb(95, 95, 93)"}
      viewBox="0 0 24 24"
      className="w-4 h-4 shrink-0"
    >
      <path d="M13.272 3.818a.75.75 0 0 1 1.455.364l-4 16a.75.75 0 0 1-1.455-.364zM6.47 7.47a.75.75 0 1 1 1.06 1.06L4.06 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06zm10 0a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L19.94 12l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </svg>
  );

  // Preview icon - Globe
  const PreviewIcon = ({ active }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={active ? "rgb(28, 28, 28)" : "rgb(95, 95, 93)"}
      viewBox="0 0 24 24"
      className="w-4 h-4 shrink-0"
    >
      <path d="M7.25 12c0-.773.043-1.526.122-2.25H4.063a8.25 8.25 0 0 0 0 4.5h3.31A21 21 0 0 1 7.25 12m1.879 3.75c.186.87.434 1.65.727 2.31.337.757.719 1.322 1.104 1.689.381.363.732.501 1.04.501s.659-.138 1.04-.501c.385-.367.767-.932 1.104-1.69.293-.66.54-1.44.727-2.309zm-4.477 0a8.27 8.27 0 0 0 4.371 3.943 9 9 0 0 1-.537-1.024c-.375-.845-.676-1.833-.887-2.919zm11.75 0c-.212 1.086-.513 2.074-.888 2.919a9 9 0 0 1-.538 1.024 8.27 8.27 0 0 0 4.372-3.943zM14.975 4.306q.293.476.538 1.025c.375.845.676 1.833.887 2.919h2.947a8.28 8.28 0 0 0-4.372-3.944M12 3.75c-.308 0-.659.138-1.04.501-.385.367-.767.933-1.104 1.69-.293.66-.54 1.44-.727 2.309h5.742a12 12 0 0 0-.727-2.31c-.337-.756-.719-1.322-1.104-1.689-.381-.363-.732-.501-1.04-.501m-2.977.556a8.28 8.28 0 0 0-4.37 3.944h2.946c.21-1.086.512-2.074.887-2.919q.245-.55.537-1.025M8.75 12c0 .782.047 1.536.132 2.25h6.236c.085-.714.132-1.468.132-2.25s-.047-1.536-.132-2.25H8.882A19 19 0 0 0 8.75 12m8 0c0 .773-.043 1.526-.122 2.25h3.308a8.25 8.25 0 0 0 0-4.5h-3.308c.08.724.122 1.477.122 2.25m5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75" />
    </svg>
  );

  // Design icon - Paintbrush/Wand
  const DesignIcon = ({ active }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={active ? "rgb(28, 28, 28)" : "rgb(95, 95, 93)"}
      viewBox="0 0 24 24"
      className="w-4 h-4 shrink-0"
    >
      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="1.5" stroke={active ? "rgb(28, 28, 28)" : "rgb(95, 95, 93)"} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const modes = [
    { id: 'code', label: 'Code', Icon: CodeIcon },
    { id: 'preview', label: 'Preview', Icon: PreviewIcon },
    { id: 'design', label: 'Design', Icon: DesignIcon },
  ];

  return (
    <div className="flex items-center gap-x-1 w-[152px] shrink-0">
      {modes.map((mode) => {
        const isActive = activeMode === mode.id;
        return (
          <button
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            className={`font-[480] text-[14px] h-7 inline-flex items-center rounded-[8px] transition-all duration-300 ease-out ${isActive
              ? 'bg-[#d7e5f9] text-[#1c1c1c] border border-[#1e52f1] px-2.5 gap-x-1.5'
              : 'bg-[#fcfbf8] text-[#5f5f5d] hover:text-[#1c1c1c] hover:bg-[#f7f4ed] border border-[#eceae4] px-2 gap-x-0'
              }`}
          >
            <mode.Icon active={isActive} />
            <span
              className={`overflow-hidden transition-all duration-300 ease-out whitespace-nowrap ${
                isActive ? 'w-auto opacity-100' : 'w-0 opacity-0'
              }`}
            >
              {mode.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ViewModeToggle;
