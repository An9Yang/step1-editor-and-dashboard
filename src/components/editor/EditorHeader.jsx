import { useState } from 'react';
import ProjectDropdown from './ProjectDropdown';
import ToolbarControls from './ToolbarControls';
import UrlBarContainer from './UrlBarContainer';
import HeaderActions from './HeaderActions';

function EditorHeader() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState('project');

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
                <button className="bg-transparent font-[480] text-[14px] h-7 aspect-square flex justify-center items-center [appearance:button] p-1 rounded-[8px] hover:bg-[#f7f4ed] transition-colors">
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
                <button className="bg-transparent font-[480] text-[14px] h-7 aspect-square inline-flex justify-center items-center [appearance:button] p-1 rounded-[8px] hover:bg-[#f7f4ed] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#1c1c1c]">
                    <path d="M19.25 7A2.25 2.25 0 0 0 17 4.75H7A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17zm-12 9V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0m13.5 1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17V7A3.75 3.75 0 0 1 7 3.25h10A3.75 3.75 0 0 1 20.75 7z" />
                  </svg>
                </button>
                {/* Settings Button with Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    className={`bg-transparent font-[480] text-[14px] h-7 aspect-square inline-flex justify-center items-center [appearance:button] p-1 rounded-[8px] transition-colors ${settingsOpen ? 'bg-[#f7f4ed]' : 'hover:bg-[#f7f4ed]'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#1c1c1c]">
                      <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z" />
                    </svg>
                  </button>
                  {settingsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-[12px] shadow-lg border border-[#eceae4] z-50">
                      {/* Tab Headers */}
                      <div className="flex border-b border-[#eceae4]">
                        <button
                          onClick={() => setSettingsTab('project')}
                          className={`flex-1 px-4 py-2.5 text-[13px] font-[480] transition-colors ${settingsTab === 'project' ? 'text-[#1e52f1] border-b-2 border-[#1e52f1]' : 'text-[#5f5f5d] hover:text-[#1c1c1c]'}`}
                        >
                          Project
                        </button>
                        <button
                          onClick={() => setSettingsTab('personal')}
                          className={`flex-1 px-4 py-2.5 text-[13px] font-[480] transition-colors ${settingsTab === 'personal' ? 'text-[#1e52f1] border-b-2 border-[#1e52f1]' : 'text-[#5f5f5d] hover:text-[#1c1c1c]'}`}
                        >
                          Personal
                        </button>
                      </div>
                      {/* Tab Content */}
                      <div className="p-3">
                        {settingsTab === 'project' ? (
                          <div className="space-y-2">
                            <button className="w-full text-left px-3 py-2 text-[13px] rounded-[8px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                              <span>General Settings</span>
                            </button>
                            <button className="w-full text-left px-3 py-2 text-[13px] rounded-[8px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                              <span>Environment Variables</span>
                            </button>
                            <button className="w-full text-left px-3 py-2 text-[13px] rounded-[8px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                              <span>Custom Domain</span>
                            </button>
                            <button className="w-full text-left px-3 py-2 text-[13px] rounded-[8px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2 text-red-500">
                              <span>Delete Project</span>
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <button className="w-full text-left px-3 py-2 text-[13px] rounded-[8px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                              <span>Profile Settings</span>
                            </button>
                            <button className="w-full text-left px-3 py-2 text-[13px] rounded-[8px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                              <span>API Keys</span>
                            </button>
                            <button className="w-full text-left px-3 py-2 text-[13px] rounded-[8px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                              <span>Billing</span>
                            </button>
                            <button className="w-full text-left px-3 py-2 text-[13px] rounded-[8px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                              <span>Sign Out</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="[text-wrap-mode:nowrap] w-full relative flex justify-between items-center caret-[#1c1c1c] [color-scheme:light]">
              <ToolbarControls />
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
