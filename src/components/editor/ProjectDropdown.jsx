import { useState } from 'react';
import SettingsModal from './SettingsModal';

function ProjectDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [appearanceSubmenuOpen, setAppearanceSubmenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Mock data
  const credits = {
    total: 100,
    used: 2.5,
    remaining: 97.5
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setAppearanceSubmenuOpen(false);
    }
  };

  return (
    <div
      id="main-menu"
      className="[text-wrap-mode:nowrap] min-w-0 relative flex caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_1_1"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[rgba(0,0,0,0)] text-[16px] [text-wrap-mode:nowrap] min-w-0 flex items-center gap-y-2 gap-x-2 outline outline-2 outline-[rgba(0,0,0,0)] outline-offset-2 caret-[#1c1c1c] [color-scheme:light] [appearance:button] p-0 group"
      >
        <svg
          className="text-center [text-wrap-mode:nowrap] align-middle w-[18px] h-[18px] block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
          viewBox="0 0 23 24"
        >
          <use
            href="assets/lovable_dev/svg-sprite.svg#svg-symbol-0"
            xlinkHref="assets/lovable_dev/svg-sprite.svg#svg-symbol-0"
          ></use>
        </svg>
        <div className="text-center text-ellipsis [text-wrap-mode:nowrap] w-full min-w-0 flex overflow-x-hidden overflow-y-hidden flex-col items-start gap-y-0 gap-x-0 caret-[#1c1c1c] [color-scheme:light]">
          <div className="text-ellipsis [text-wrap-mode:nowrap] min-w-0 flex overflow-x-hidden overflow-y-hidden items-center gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]">
            <p className="leading-none font-[480] text-[14px] text-ellipsis [text-wrap-mode:nowrap] min-w-0 overflow-x-hidden overflow-y-hidden caret-[#1c1c1c] [color-scheme:light] my-0">
              Pixel Perfect Pixels
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgba(28, 28, 28, 0.5)"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              className={`text-[rgba(28,28,28,0.5)] [text-wrap-mode:nowrap] align-middle w-4 h-4 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[rgba(28,28,28,0.5)] caret-[rgba(28,28,28,0.5)] [color-scheme:light] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              data-svg-size="598"
            >
              <path
                fill="rgba(28, 28, 28, 0.5)"
                d="M11.526 15.582a.75.75 0 0 0 1.004-.052l5-5a.75.75 0 1 0-1.06-1.06L12 13.94 7.53 9.47a.75.75 0 1 0-1.06 1.06l5 5z"
                className="[text-wrap-mode:nowrap] inline fill-[rgba(28,28,28,0.5)] caret-[rgba(28,28,28,0.5)] [color-scheme:light]"
              ></path>
            </svg>
          </div>
          <div className="opacity-100 [text-wrap-mode:nowrap] flex items-center gap-x-1.5 caret-[#1c1c1c] [color-scheme:light]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-[#5f5f5d] text-[12px] text-left text-ellipsis [text-wrap-mode:nowrap] w-full min-w-0 flex overflow-x-hidden overflow-y-hidden caret-[#5f5f5d] [color-scheme:light] my-0">
              v1.2.3 - Last saved 2 min ago
            </p>
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[100]"
            onClick={handleOverlayClick}
          />

          {/* Menu */}
          <div className="absolute top-full left-0 mt-2 w-[280px] bg-[#fcfbf8] rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-[#eceae4] z-[101] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Go to Dashboard */}
            <button
              className="w-full text-left px-4 py-3 text-[14px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2 border-b border-[#eceae4]"
              onClick={() => {
                setIsOpen(false);
                window.location.href = '/';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M19 12H5"></path>
                <path d="M12 19l-7-7 7-7"></path>
              </svg>
              <span>Go to Dashboard</span>
            </button>

            {/* Workspace Info */}
            <div className="px-4 py-3 border-b border-[#eceae4]">
              <p className="text-[13px] text-[#5f5f5d] mb-3">HaoCheng's Lovable</p>

              {/* Credits Card */}
              <div className="bg-white rounded-[10px] border border-[#eceae4] p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[14px] font-medium text-[#1c1c1c]">Credits</span>
                  <span className="text-[14px] text-[#1e52f1] font-medium">{credits.remaining} left</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-[#e5e7eb] rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(credits.remaining / credits.total) * 100}%`,
                      background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)'
                    }}
                  />
                </div>

                <div className="flex items-center gap-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                  <span className="text-[12px] text-[#5f5f5d]">Daily credits used first</span>
                </div>
              </div>
            </div>

            {/* Get Free Credits */}
            <button
              className="w-full text-left px-4 py-2.5 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5 border-b border-[#eceae4]"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#5f5f5d]">
                <rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect>
                <path d="M12 2v6"></path>
                <path d="M8 6l4 2 4-2"></path>
              </svg>
              <span>Get free credits</span>
            </button>

            {/* Menu Items */}
            <div className="py-1.5">
              {/* Settings */}
              <button
                className="w-full text-left px-4 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center justify-between"
                onClick={() => {
                  setIsOpen(false);
                  setSettingsOpen(true);
                }}
              >
                <div className="flex items-center gap-x-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#5f5f5d]">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  <span>Settings</span>
                </div>
                <span className="text-[11px] text-[#9a9a98]">&#8984;.</span>
              </button>

              {/* Remix this project */}
              <button
                className="w-full text-left px-4 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5"
                onClick={() => setIsOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#5f5f5d]">
                  <path d="M17 1l4 4-4 4"></path>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                  <path d="M7 23l-4-4 4-4"></path>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
                <span>Remix this project</span>
              </button>

              {/* Rename project */}
              <button
                className="w-full text-left px-4 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5"
                onClick={() => setIsOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#5f5f5d]">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                <span>Rename project</span>
              </button>

              {/* Star project */}
              <button
                className="w-full text-left px-4 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2.5"
                onClick={() => setIsOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#5f5f5d]">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Star project</span>
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-[#eceae4]"></div>

            {/* Bottom Section */}
            <div className="py-1.5">
              {/* Appearance with submenu */}
              <div className="relative">
                <button
                  className="w-full text-left px-4 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center justify-between"
                  onMouseEnter={() => setAppearanceSubmenuOpen(true)}
                  onMouseLeave={() => setAppearanceSubmenuOpen(false)}
                >
                  <div className="flex items-center gap-x-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#5f5f5d]">
                      <circle cx="12" cy="12" r="5"></circle>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                    </svg>
                    <span>Appearance</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#9a9a98]">
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                </button>

                {/* Appearance Submenu */}
                {appearanceSubmenuOpen && (
                  <div
                    className="absolute left-full top-0 ml-1 w-36 bg-[#fcfbf8] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#eceae4] py-1.5 z-10"
                    onMouseEnter={() => setAppearanceSubmenuOpen(true)}
                    onMouseLeave={() => setAppearanceSubmenuOpen(false)}
                  >
                    <button className="w-full text-left px-3 py-1.5 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <circle cx="12" cy="12" r="5"></circle>
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                      </svg>
                      <span>Light</span>
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                      <span>Dark</span>
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center gap-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span>System</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Help */}
              <button
                className="w-full text-left px-4 py-2 text-[13px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors flex items-center justify-between"
                onClick={() => {
                  setIsOpen(false);
                  window.open('https://help.lovable.dev', '_blank');
                }}
              >
                <div className="flex items-center gap-x-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#5f5f5d]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <span>Help</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#9a9a98]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}

export default ProjectDropdown;
