import { useState } from 'react';
import ProjectDropdown from './ProjectDropdown';
import ToolbarControls from './ToolbarControls';
import UrlBarContainer from './UrlBarContainer';
import HeaderActions from './HeaderActions';

function EditorHeader() {
  const [settingsOpen, setSettingsOpen] = useState(false);

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
                    <div className="absolute top-full left-0 mt-1.5 w-56 bg-[#fcfbf8] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#eceae4] z-50 overflow-hidden">
                      <div className="p-1.5">
                        {/* Project Section */}
                        <div className="px-3 py-1.5">
                          <span className="text-[11px] font-[500] text-[#9a9a98] uppercase tracking-wide">Project</span>
                        </div>
                        <div className="space-y-0.5">
                          <button className="w-full text-left px-3 py-2 text-[13px] rounded-[6px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
                              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z" />
                            </svg>
                            <span>General Settings</span>
                          </button>
                          <button className="w-full text-left px-3 py-2 text-[13px] rounded-[6px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
                              <path d="M13.272 3.818a.75.75 0 0 1 1.455.364l-4 16a.75.75 0 0 1-1.455-.364zM6.47 7.47a.75.75 0 1 1 1.06 1.06L4.06 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06zm10 0a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L19.94 12l-3.47-3.47a.75.75 0 0 1 0-1.06" />
                            </svg>
                            <span>Environment Variables</span>
                          </button>
                          <button className="w-full text-left px-3 py-2 text-[13px] rounded-[6px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
                              <path d="M7.25 12c0-.773.043-1.526.122-2.25H4.063a8.25 8.25 0 0 0 0 4.5h3.31A21 21 0 0 1 7.25 12m1.879 3.75c.186.87.434 1.65.727 2.31.337.757.719 1.322 1.104 1.689.381.363.732.501 1.04.501s.659-.138 1.04-.501c.385-.367.767-.932 1.104-1.69.293-.66.54-1.44.727-2.309zm-4.477 0a8.27 8.27 0 0 0 4.371 3.943 9 9 0 0 1-.537-1.024c-.375-.845-.676-1.833-.887-2.919zm11.75 0c-.212 1.086-.513 2.074-.888 2.919a9 9 0 0 1-.538 1.024 8.27 8.27 0 0 0 4.372-3.943zM14.975 4.306q.293.476.538 1.025c.375.845.676 1.833.887 2.919h2.947a8.28 8.28 0 0 0-4.372-3.944M12 3.75c-.308 0-.659.138-1.04.501-.385.367-.767.933-1.104 1.69-.293.66-.54 1.44-.727 2.309h5.742a12 12 0 0 0-.727-2.31c-.337-.756-.719-1.322-1.104-1.689-.381-.363-.732-.501-1.04-.501m-2.977.556a8.28 8.28 0 0 0-4.37 3.944h2.946c.21-1.086.512-2.074.887-2.919q.245-.55.537-1.025M8.75 12c0 .782.047 1.536.132 2.25h6.236c.085-.714.132-1.468.132-2.25s-.047-1.536-.132-2.25H8.882A19 19 0 0 0 8.75 12m8 0c0 .773-.043 1.526-.122 2.25h3.308a8.25 8.25 0 0 0 0-4.5h-3.308c.08.724.122 1.477.122 2.25m5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75" />
                            </svg>
                            <span>Custom Domain</span>
                          </button>
                        </div>

                        <div className="border-t border-[#eceae4] my-2 mx-1"></div>

                        {/* Account Section */}
                        <div className="px-3 py-1.5">
                          <span className="text-[11px] font-[500] text-[#9a9a98] uppercase tracking-wide">Account</span>
                        </div>
                        <div className="space-y-0.5">
                          <button className="w-full text-left px-3 py-2 text-[13px] rounded-[6px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
                              <path d="M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0m-1.813 8.772A4.25 4.25 0 0 1 8.5 14.25h7a4.25 4.25 0 0 1 4.25 4.25v.59a.91.91 0 0 1-.455.79C17.548 21.017 14.96 21.75 12 21.75s-5.548-.733-7.295-1.87a.91.91 0 0 1-.455-.79v-.59c0-1.17.469-2.292 1.302-3.119a4.25 4.25 0 0 1 .385-.359m.53 1.164a2.75 2.75 0 0 0-.717 1.814v.327c1.42.87 3.608 1.423 6.25 1.423s4.83-.553 6.25-1.423v-.327a2.75 2.75 0 0 0-2.75-2.75h-7a2.75 2.75 0 0 0-2.033.936" />
                            </svg>
                            <span>Profile Settings</span>
                          </button>
                          <button className="w-full text-left px-3 py-2 text-[13px] rounded-[6px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
                              <path d="M7.75 8.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-5.25-4A3.75 3.75 0 0 1 7 3.5h10a3.75 3.75 0 0 1 3.75 3.75v9.5A3.75 3.75 0 0 1 17 20.5H7a3.75 3.75 0 0 1-3.75-3.75zM7 5a2.25 2.25 0 0 0-2.25 2.25v9.5A2.25 2.25 0 0 0 7 19h10a2.25 2.25 0 0 0 2.25-2.25v-9.5A2.25 2.25 0 0 0 17 5z" />
                            </svg>
                            <span>API Keys</span>
                          </button>
                          <button className="w-full text-left px-3 py-2 text-[13px] rounded-[6px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
                              <path d="M4.25 7A2.75 2.75 0 0 1 7 4.25h10A2.75 2.75 0 0 1 19.75 7v10A2.75 2.75 0 0 1 17 19.75H7A2.75 2.75 0 0 1 4.25 17zm1.5 0v10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25m2 3.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" />
                            </svg>
                            <span>Billing</span>
                          </button>
                        </div>

                        <div className="border-t border-[#eceae4] my-2 mx-1"></div>

                        {/* Actions Section */}
                        <div className="space-y-0.5">
                          <button className="w-full text-left px-3 py-2 text-[13px] rounded-[6px] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5 text-[#5f5f5d]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
                              <path d="M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h6a.75.75 0 0 0 0-1.5H5c-.69 0-1.25-.56-1.25-1.25V6c0-.69.56-1.25 1.25-1.25h6a.75.75 0 0 0 0-1.5zm11.47 4.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H10a.75.75 0 0 1 0-1.5h9.19l-2.72-2.72a.75.75 0 0 1 0-1.06" />
                            </svg>
                            <span>Sign Out</span>
                          </button>
                          <button className="w-full text-left px-3 py-2 text-[13px] rounded-[6px] hover:bg-[#fef2f2] transition-colors flex items-center gap-x-2.5 text-[#dc2626]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(220, 38, 38)" className="w-4 h-4 shrink-0">
                              <path d="M10.25 4.25a1.75 1.75 0 0 1 3.5 0V5h3.5a.75.75 0 0 1 0 1.5H18v11.75A2.75 2.75 0 0 1 15.25 21h-6.5A2.75 2.75 0 0 1 6 18.25V6.5h-.25a.75.75 0 0 1 0-1.5h3.5v-.75zm1.5 0v.75h.5v-.75a.25.25 0 0 0-.5 0M7.5 6.5v11.75c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V6.5zm2.75 3.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m4 .75a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z" />
                            </svg>
                            <span>Delete Project</span>
                          </button>
                        </div>
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
