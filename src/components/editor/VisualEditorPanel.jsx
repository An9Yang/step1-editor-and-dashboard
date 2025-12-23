import { useState } from 'react';

function VisualEditorPanel({ onBackToChat }) {
    // Mock state for visual properties
    const [properties, setProperties] = useState({
        fontFamily: 'Inter',
        fontSize: '16px',
        primaryColor: '#6366f1',
        backgroundColor: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
    });

    const handleChange = (key, value) => {
        setProperties(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="flex flex-col h-full bg-[#fcfbf8] border-r border-[#eceae4] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#eceae4] shrink-0 sticky top-0 bg-[#fcfbf8] z-10">
                <h2 className="text-sm font-semibold text-[#1c1c1c]">Visual Editor</h2>
                <button
                    onClick={onBackToChat}
                    className="text-xs text-[#5f5f5d] hover:text-[#1c1c1c] px-2 py-1 rounded hover:bg-[#eceae4] transition-colors flex items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 011.633 0l.366 2.25a.75.75 0 01-.817.857l-2.078-.339a6.75 6.75 0 00-6.104 5.986.75.75 0 01-1.492-.158 8.25 8.25 0 017.46-7.318l1.033-6.196a.75.75 0 01.85-.625zM2.873 9.354a.75.75 0 011.026.279c.676 1.134 1.83 1.932 3.195 2.115l.635-3.801a.75.75 0 011.48.246l-.768 4.609 4.609.768a.75.75 0 01-.246 1.48l-3.801-.634c-.183 1.365.615 2.519 1.749 3.195a.75.75 0 01-.768 1.29 8.25 8.25 0 01-9.98-9.98.75.75 0 01.269-1.027z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>
                    Back to Chat
                </button>
            </div>

            {/* Controls Container */}
            <div className="p-4 space-y-6">

                {/* Typography Section */}
                <section className="space-y-3">
                    <h3 className="text-xs font-medium text-[#9a9a98] uppercase tracking-wide">Typography</h3>
                    <div className="space-y-2">
                        <div>
                            <label className="block text-xs text-[#5f5f5d] mb-1">Font Family</label>
                            <select
                                value={properties.fontFamily}
                                onChange={(e) => handleChange('fontFamily', e.target.value)}
                                className="w-full text-sm bg-white border border-[#eceae4] rounded px-2 py-1.5 focus:outline-none focus:border-[#6366f1]"
                            >
                                <option value="Inter">Inter</option>
                                <option value="Roboto">Roboto</option>
                                <option value="System">System UI</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs text-[#5f5f5d] mb-1">Base Font Size</label>
                            <input
                                type="text"
                                value={properties.fontSize}
                                onChange={(e) => handleChange('fontSize', e.target.value)}
                                className="w-full text-sm bg-white border border-[#eceae4] rounded px-2 py-1.5 focus:outline-none focus:border-[#6366f1]"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="h-px bg-[#eceae4]"></div>

                {/* Colors Section */}
                <section className="space-y-3">
                    <h3 className="text-xs font-medium text-[#9a9a98] uppercase tracking-wide">Colors</h3>
                    <div className="space-y-2">
                        <div>
                            <label className="block text-xs text-[#5f5f5d] mb-1">Primary Color</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={properties.primaryColor}
                                    onChange={(e) => handleChange('primaryColor', e.target.value)}
                                    className="h-8 w-8 rounded border border-[#eceae4] cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={properties.primaryColor}
                                    onChange={(e) => handleChange('primaryColor', e.target.value)}
                                    className="flex-1 text-sm bg-white border border-[#eceae4] rounded px-2 py-1.5 focus:outline-none focus:border-[#6366f1]"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-[#5f5f5d] mb-1">Background</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={properties.backgroundColor}
                                    onChange={(e) => handleChange('backgroundColor', e.target.value)}
                                    className="h-8 w-8 rounded border border-[#eceae4] cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={properties.backgroundColor}
                                    onChange={(e) => handleChange('backgroundColor', e.target.value)}
                                    className="flex-1 text-sm bg-white border border-[#eceae4] rounded px-2 py-1.5 focus:outline-none focus:border-[#6366f1]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="h-px bg-[#eceae4]"></div>

                {/* Layout Section */}
                <section className="space-y-3">
                    <h3 className="text-xs font-medium text-[#9a9a98] uppercase tracking-wide">Layout & Spacing</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block text-xs text-[#5f5f5d] mb-1">Padding</label>
                            <input
                                type="text"
                                value={properties.padding}
                                onChange={(e) => handleChange('padding', e.target.value)}
                                className="w-full text-sm bg-white border border-[#eceae4] rounded px-2 py-1.5 focus:outline-none focus:border-[#6366f1]"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-[#5f5f5d] mb-1">Border Radius</label>
                            <input
                                type="text"
                                value={properties.borderRadius}
                                onChange={(e) => handleChange('borderRadius', e.target.value)}
                                className="w-full text-sm bg-white border border-[#eceae4] rounded px-2 py-1.5 focus:outline-none focus:border-[#6366f1]"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default VisualEditorPanel;
