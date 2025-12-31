import { useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatInputArea from './ChatInputArea';
import ComponentCollection from './ComponentCollection';

function ChatPanel({ historyOpen, componentCollectionOpen }) {
  const [selectedVersion, setSelectedVersion] = useState(0);
  const [menuOpenId, setMenuOpenId] = useState(null);

  // 版本历史数据
  const versionHistory = [
    { id: 0, title: 'Enhance interactive UI components', date: 'Dec 26, 11:04 AM', published: false },
    { id: 1, title: 'Pixel-perfect Allbirds clone', date: 'Dec 15, 11:13 AM', published: false },
  ];

  const handleMenuToggle = (e, id) => {
    e.stopPropagation();
    setMenuOpenId(menuOpenId === id ? null : id);
  };

  // Component Collection 视图
  if (componentCollectionOpen) {
    return <ComponentCollection onInsertReference={(ref) => console.log('Insert reference:', ref)} />;
  }

  // 版本历史视图
  if (historyOpen) {
    return (
      <div
        className="h-full min-h-0 flex flex-col caret-[#1c1c1c] [color-scheme:light]"
        data-component-id="Component_2_1"
      >
        <div className="w-full h-full min-h-0 relative flex flex-col caret-[#1c1c1c] [color-scheme:light]">
          <div className="w-full h-full min-h-0 overflow-y-auto caret-[#1c1c1c] [color-scheme:light] px-5 py-5">
            {/* Unpublished Section */}
            <div className="mb-4">
              <h3 className="text-[15px] font-semibold text-[#1c1c1c] mb-3">Unpublished</h3>

              <div className="space-y-1">
                {versionHistory.map((version) => (
                  <div
                    key={version.id}
                    onClick={() => {
                      setSelectedVersion(version.id);
                      setMenuOpenId(null);
                    }}
                    className={`relative group w-full text-left px-4 py-3 rounded-[10px] transition-all cursor-pointer ${
                      selectedVersion === version.id
                        ? 'bg-[#e8eeff]'
                        : 'hover:bg-[#f7f4ed]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      {/* Title - truncated */}
                      <span className={`text-[14px] font-medium truncate flex-1 min-w-0 ${
                        selectedVersion === version.id ? 'text-[#1e52f1]' : 'text-[#1c1c1c]'
                      }`}>
                        {version.title}
                      </span>

                      {/* Right side: Date or Action buttons */}
                      {selectedVersion === version.id ? (
                        <div className="flex items-center gap-1 shrink-0">
                          {/* Bookmark */}
                          <button
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 hover:bg-[#d4dfff] rounded-[6px] transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                          </button>
                          {/* Restore */}
                          <button
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 hover:bg-[#d4dfff] rounded-[6px] transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                              <path d="M3 3v5h5"></path>
                            </svg>
                          </button>
                          {/* More menu */}
                          <div className="relative">
                            <button
                              onClick={(e) => handleMenuToggle(e, version.id)}
                              className={`p-1.5 rounded-[6px] transition-colors ${
                                menuOpenId === version.id ? 'bg-[#d4dfff]' : 'hover:bg-[#d4dfff]'
                              }`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#5f5f5d]">
                                <circle cx="12" cy="5" r="1.5"></circle>
                                <circle cx="12" cy="12" r="1.5"></circle>
                                <circle cx="12" cy="19" r="1.5"></circle>
                              </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {menuOpenId === version.id && (
                              <>
                                <div
                                  className="fixed inset-0 z-10"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setMenuOpenId(null);
                                  }}
                                />
                                <div className="absolute right-0 top-full mt-1 w-[220px] bg-[#fcfbf8] rounded-[10px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#eceae4] z-20 py-1.5 animate-in fade-in zoom-in-95 duration-150">
                                  {/* Previewing */}
                                  <button className="w-full text-left px-3 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <span>Previewing</span>
                                  </button>
                                  {/* Open preview in new tab */}
                                  <button className="w-full text-left px-3 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      <polyline points="15 3 21 3 21 9"></polyline>
                                      <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    <span>Open preview in new tab</span>
                                  </button>
                                  {/* View code changes */}
                                  <button className="w-full text-left px-3 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                                      <polyline points="16 18 22 12 16 6"></polyline>
                                      <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                    <span>View code changes</span>
                                  </button>
                                  {/* View on GitHub */}
                                  <button className="w-full text-left px-3 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      <polyline points="15 3 21 3 21 9"></polyline>
                                      <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    <span>View on GitHub</span>
                                  </button>
                                  {/* Go to message in chat */}
                                  <button className="w-full text-left px-3 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <span>Go to message in chat</span>
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ) : (
                        <span className="text-[12px] text-[#9a9a98] shrink-0">
                          {version.date}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 默认聊天视图
  return (
    <div
      className="h-full min-h-0 flex flex-col caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_1"
    >
      <div className="w-full h-full min-h-0 relative flex flex-col caret-[#1c1c1c] [color-scheme:light]">
        {/* Chat content area - scrollable */}
        <div className="w-full h-full min-h-0 overflow-y-auto caret-[#1c1c1c] [color-scheme:light] px-5 py-5">
          <div className="space-y-5">
            <div className="flex items-center justify-between px-1 pb-2 border-b border-gray-100">
              <span className="text-xs font-medium text-gray-500">Chat History</span>
            </div>
            <ChatMessages />
            <ChatInputArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
