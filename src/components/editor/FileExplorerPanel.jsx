import React, { useState } from 'react';

function FileExplorerPanel() {
    const [files] = useState([
        {
            name: 'src',
            type: 'folder',
            isOpen: true,
            children: [
                {
                    name: 'components',
                    type: 'folder',
                    isOpen: true,
                    children: [
                        { name: 'Header.jsx', type: 'file' },
                        { name: 'Hero.jsx', type: 'file' },
                        { name: 'Footer.jsx', type: 'file' }
                    ]
                },
                { name: 'App.jsx', type: 'file' },
                { name: 'main.jsx', type: 'file' },
                { name: 'index.css', type: 'file' }
            ]
        },
        { name: 'package.json', type: 'file' },
        { name: 'README.md', type: 'file' }
    ]);

    const FileTreeItem = ({ item, depth = 0 }) => {
        const [isOpen, setIsOpen] = useState(item.isOpen || false);

        return (
            <div className="select-none">
                <div
                    className="flex items-center gap-1.5 py-1 px-2 hover:bg-[#f7f4ed] cursor-pointer text-[13px] text-[#5f5f5d] hover:text-[#1c1c1c]"
                    style={{ paddingLeft: `${depth * 16 + 8}px` }}
                    onClick={() => item.type === 'folder' && setIsOpen(!isOpen)}
                >
                    <span className="opacity-70">
                        {item.type === 'folder' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#9a9a98]">
                                <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#5f5f5d]">
                                <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
                                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                            </svg>
                        )}
                    </span>
                    <span className="truncate">{item.name}</span>
                </div>
                {item.type === 'folder' && isOpen && item.children && (
                    <div>
                        {item.children.map((child, idx) => (
                            <FileTreeItem key={idx} item={child} depth={depth + 1} />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full bg-[#fcfbf8] border-r border-[#eceae4]">
            {/* Header */}
            <div className="px-4 py-3 border-b border-[#eceae4] shrink-0 sticky top-0 bg-[#fcfbf8] z-10">
                <h2 className="text-sm font-semibold text-[#1c1c1c]">Explorer</h2>
            </div>

            {/* File Tree */}
            <div className="flex-1 overflow-y-auto py-2">
                {files.map((file, idx) => (
                    <FileTreeItem key={idx} item={file} />
                ))}
            </div>
        </div>
    );
}

export default FileExplorerPanel;
