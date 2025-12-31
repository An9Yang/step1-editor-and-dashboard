import ProjectDropdown from './ProjectDropdown';
import ToolbarControls from './ToolbarControls';
import UrlBarContainer from './UrlBarContainer';
import HeaderActions from './HeaderActions';

function EditorHeader({ activeMode, onModeChange, historyOpen, onHistoryToggle, componentCollectionOpen, onComponentCollectionToggle }) {
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
                {/* Component Collection Toggle Button */}
                <button
                  onClick={() => onComponentCollectionToggle(!componentCollectionOpen)}
                  className={`font-[480] text-[14px] h-7 aspect-square flex justify-center items-center [appearance:button] p-1 rounded-[8px] transition-colors ${componentCollectionOpen ? 'bg-[#1e52f1] text-white' : 'bg-transparent hover:bg-[#f7f4ed]'}`}
                  title="Component Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={componentCollectionOpen ? "white" : "rgb(28, 28, 28)"}
                    viewBox="0 0 24 24"
                    width="100%"
                    height="100%"
                    className="text-center [text-wrap-mode:nowrap] align-middle w-3.5 h-3.5 block overflow-x-hidden overflow-y-hidden shrink-0 pointer-events-none"
                  >
                    <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z" />
                  </svg>
                </button>
                {/* History Toggle Button */}
                <button
                  onClick={() => onHistoryToggle(!historyOpen)}
                  className={`font-[480] text-[14px] h-7 aspect-square flex justify-center items-center [appearance:button] p-1 rounded-[8px] transition-colors ${historyOpen ? 'bg-[#1e52f1] text-white' : 'bg-transparent hover:bg-[#f7f4ed]'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={historyOpen ? "white" : "rgb(28, 28, 28)"}
                    viewBox="0 0 24 24"
                    width="100%"
                    height="100%"
                    className="text-center [text-wrap-mode:nowrap] align-middle w-3.5 h-3.5 block overflow-x-hidden overflow-y-hidden shrink-0 pointer-events-none"
                  >
                    <path
                      d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75q-.728 0-1.43-.105a.75.75 0 0 1 .218-1.483q.593.087 1.212.088a8.25 8.25 0 1 0-1.212-16.412.75.75 0 0 1-.219-1.484A10 10 0 0 1 12 2.25M4.323 16.76a.75.75 0 0 1 1.05.154 8.3 8.3 0 0 0 1.713 1.713.75.75 0 0 1-.895 1.204A9.8 9.8 0 0 1 4.17 17.81a.75.75 0 0 1 .154-1.05"
                    ></path>
                    <path
                      d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.78 2.78a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75M2.354 10.57a.75.75 0 0 1 1.484.218 8.3 8.3 0 0 0 0 2.424.75.75 0 0 1-1.484.219 9.8 9.8 0 0 1 0-2.862M6.191 4.169a.75.75 0 1 1 .895 1.204 8.3 8.3 0 0 0-1.713 1.713.75.75 0 0 1-1.204-.895A9.8 9.8 0 0 1 6.19 4.17"
                    ></path>
                  </svg>
                </button>
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
