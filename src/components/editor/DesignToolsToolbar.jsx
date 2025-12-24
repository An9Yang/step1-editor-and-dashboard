import React from 'react';

function DesignToolsToolbar({ activeTool, onToolChange, onFinish }) {
    const tools = [
        {
            id: 'cursor', label: 'Select', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            id: 'pen', label: 'Draw', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>
            )
        },
        {
            id: 'box', label: 'Box', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V5.25Zm1.5 13.5h15V6H4.5v12.75Z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            id: 'text', label: 'Text', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Z" />
                    <path d="M7.5 5.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5h-9Z" />
                </svg>
            )
        }
    ];

    return (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[60]">
            {/* Tools Group */}
            <div className="bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-[#eceae4] p-1 flex gap-1">
                {tools.map((tool) => (
                    <button
                        key={tool.id}
                        onClick={() => onToolChange(tool.id)}
                        className={`p-2 rounded-full transition-all duration-200 ${activeTool === tool.id
                            ? 'bg-[#1c1c1c] text-white shadow-sm'
                            : 'text-[#5f5f5d] hover:bg-[#f7f4ed] hover:text-[#1c1c1c]'
                            }`}
                        title={tool.label}
                    >
                        {tool.icon}
                    </button>
                ))}
            </div>

            {/* Action Group */}
            <div className="bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-[#eceae4] p-1 flex gap-1">
                <button
                    onClick={() => onToolChange('cursor')}
                    className="px-3 py-2 rounded-full text-[#5f5f5d] text-xs font-medium hover:bg-[#f7f4ed] hover:text-[#1c1c1c] transition-colors"
                >
                    Done
                </button>
                <button
                    onClick={onFinish}
                    className="px-3 py-2 rounded-full bg-[#1c1c1c] text-white text-xs font-medium hover:bg-black transition-colors shadow-sm flex items-center gap-1"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default DesignToolsToolbar;
