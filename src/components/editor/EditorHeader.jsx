import { useState } from 'react';
import ProjectDropdown from './ProjectDropdown';
import ToolbarControls from './ToolbarControls';
import UrlBarContainer from './UrlBarContainer';
import HeaderActions from './HeaderActions';

function EditorHeader({ activeMode, onModeChange }) {
  const [historyOpen, setHistoryOpen] = useState(false);

  // 历史记录数据示例
  const historyItems = [
    { id: 1, action: 'Updated homepage layout', time: '2 minutes ago', type: 'edit' },
    { id: 2, action: 'Added new button component', time: '15 minutes ago', type: 'add' },
    { id: 3, action: 'Changed color scheme', time: '1 hour ago', type: 'edit' },
    { id: 4, action: 'Deleted unused section', time: '2 hours ago', type: 'delete' },
    { id: 5, action: 'Initial project creation', time: 'Yesterday', type: 'create' },
  ];

  return (
    <nav
      className="w-full h-12 min-h-12 relative flex shrink-0 items-center gap-y-0 gap-x-0 caret-[#1c1c1c] [color-scheme:light] px-4"
      data-component-id="Component_1"
    >
      <div className="w-full max-w-full relative flex shrink-0 items-center gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]">
        <div className="[white-space-collapse:collapse] [text-wrap-mode:nowrap] w-full caret-[#1c1c1c] [color-scheme:light]">
          <div className="[text-wrap-mode:nowrap] w-full relative flex shrink-0 justify-between items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light]">
            <div className="[text-wrap-mode:nowrap] w-[30%] flex shrink-0 items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light]">
              <ProjectDropdown />
              <div className="[text-wrap-mode:nowrap] flex gap-x-1 caret-[#1c1c1c] [color-scheme:light] ml-auto mr-2">
                {/* History Button with Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setHistoryOpen(!historyOpen)}
                    className={`bg-transparent font-[480] text-[14px] h-7 aspect-square flex justify-center items-center [appearance:button] p-1 rounded-[8px] transition-colors ${historyOpen ? 'bg-[#f7f4ed]' : 'hover:bg-[#f7f4ed]'}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="rgb(28, 28, 28)"
                      viewBox="0 0 24 24"
                      width="100%"
                      height="100%"
                      className="text-center [text-wrap-mode:nowrap] align-middle w-3.5 h-3.5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
                      data-svg-size="1260"
                    >
                      <path
                        fill="rgb(28, 28, 28)"
                        d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75q-.728 0-1.43-.105a.75.75 0 0 1 .218-1.483q.593.087 1.212.088a8.25 8.25 0 1 0-1.212-16.412.75.75 0 0 1-.219-1.484A10 10 0 0 1 12 2.25M4.323 16.76a.75.75 0 0 1 1.05.154 8.3 8.3 0 0 0 1.713 1.713.75.75 0 0 1-.895 1.204A9.8 9.8 0 0 1 4.17 17.81a.75.75 0 0 1 .154-1.05"
                        className="[text-wrap-mode:nowrap] inline fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
                      ></path>
                      <path
                        fill="rgb(28, 28, 28)"
                        d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.78 2.78a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75M2.354 10.57a.75.75 0 0 1 1.484.218 8.3 8.3 0 0 0 0 2.424.75.75 0 0 1-1.484.219 9.8 9.8 0 0 1 0-2.862M6.191 4.169a.75.75 0 1 1 .895 1.204 8.3 8.3 0 0 0-1.713 1.713.75.75 0 0 1-1.204-.895A9.8 9.8 0 0 1 6.19 4.17"
                        className="[text-wrap-mode:nowrap] inline fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
                      ></path>
                    </svg>
                  </button>
                  {historyOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-72 bg-[#fcfbf8] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#eceae4] z-50 overflow-hidden">
                      <div className="p-1.5">
                        {/* Header */}
                        <div className="px-3 py-2 flex items-center justify-between">
                          <span className="text-[13px] font-[500] text-[#1c1c1c]">Version History</span>
                          <button className="text-[12px] text-[#1e52f1] hover:underline">View all</button>
                        </div>

                        <div className="border-t border-[#eceae4] my-1 mx-1"></div>

                        {/* History List */}
                        <div className="max-h-64 overflow-y-auto">
                          {historyItems.map((item) => (
                            <button
                              key={item.id}
                              className="w-full text-left px-3 py-2.5 rounded-[6px] hover:bg-[#f7f4ed] transition-colors flex items-start gap-x-2.5 group"
                              onClick={() => setHistoryOpen(false)}
                            >
                              {/* Icon based on type */}
                              <div className="mt-0.5">
                                {item.type === 'edit' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
                                    <path d="M16.862 3.487a2.75 2.75 0 0 1 3.89 3.89l-9.193 9.192a2.75 2.75 0 0 1-1.228.707l-3.793 1.012a.75.75 0 0 1-.918-.918l1.012-3.793a2.75 2.75 0 0 1 .707-1.228zm2.83 1.06a1.25 1.25 0 0 0-1.768 0L8.732 13.74a1.25 1.25 0 0 0-.322.558l-.63 2.362 2.362-.63a1.25 1.25 0 0 0 .558-.322l9.192-9.192a1.25 1.25 0 0 0 0-1.768z" />
                                  </svg>
                                )}
                                {item.type === 'add' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(34, 197, 94)" className="w-4 h-4 shrink-0">
                                    <path d="M12 3.25a.75.75 0 0 1 .75.75v7.25H20a.75.75 0 0 1 0 1.5h-7.25V20a.75.75 0 0 1-1.5 0v-7.25H4a.75.75 0 0 1 0-1.5h7.25V4a.75.75 0 0 1 .75-.75" />
                                  </svg>
                                )}
                                {item.type === 'delete' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(239, 68, 68)" className="w-4 h-4 shrink-0">
                                    <path d="M10.25 4.25a1.75 1.75 0 0 1 3.5 0V5h3.5a.75.75 0 0 1 0 1.5H18v11.75A2.75 2.75 0 0 1 15.25 21h-6.5A2.75 2.75 0 0 1 6 18.25V6.5h-.25a.75.75 0 0 1 0-1.5h3.5v-.75" />
                                  </svg>
                                )}
                                {item.type === 'create' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(59, 130, 246)" className="w-4 h-4 shrink-0">
                                    <path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" />
                                  </svg>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[13px] text-[#1c1c1c] truncate">{item.action}</p>
                                <p className="text-[11px] text-[#9a9a98] mt-0.5">{item.time}</p>
                              </div>
                              {/* Restore button on hover */}
                              <span className="text-[11px] text-[#1e52f1] opacity-0 group-hover:opacity-100 transition-opacity">
                                Restore
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button className="bg-transparent font-[480] text-[14px] h-7 aspect-square inline-flex justify-center items-center [appearance:button] p-1 rounded-[8px] hover:bg-[#f7f4ed] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#1c1c1c]">
                    <path d="M19.25 7A2.25 2.25 0 0 0 17 4.75H7A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17zm-12 9V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0m13.5 1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17V7A3.75 3.75 0 0 1 7 3.25h10A3.75 3.75 0 0 1 20.75 7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="[text-wrap-mode:nowrap] w-full relative flex justify-between items-center caret-[#1c1c1c] [color-scheme:light]">
              <ToolbarControls activeMode={activeMode} onModeChange={onModeChange} />
              {/* Route Display */}
              <div className="flex items-center justify-center px-3 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-600">
                /home
              </div>
              <UrlBarContainer />
              <HeaderActions />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default EditorHeader;
