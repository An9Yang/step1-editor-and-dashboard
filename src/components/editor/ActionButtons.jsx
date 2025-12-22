import { useState } from 'react';

function ActionButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const shareOptions = [
    { icon: '🔗', label: 'Copy Link', action: 'copy' },
    { icon: '✉️', label: 'Share via Email', action: 'email' },
    { icon: '𝕏', label: 'Share to X', action: 'twitter' },
    { icon: '💬', label: 'Share to Slack', action: 'slack' },
  ];

  return (
    <div
      className="[text-wrap-mode:nowrap] flex items-center caret-[#1c1c1c] [color-scheme:light] group relative"
      data-component-id="Component_1_4_1"
    >
      <a
        href="/@GaDA6DdaNuUyR6HDTqBvGAQCyie2"
        className="[text-wrap-mode:nowrap] block caret-[#1c1c1c] [color-scheme:light]"
      >
        <span className="text-[12px] [text-wrap-mode:nowrap] w-[26px] h-[26px] relative flex overflow-hidden shrink-0 items-center rounded-full border-[#fcfbf8] border">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c"
            className="align-middle w-full h-full max-w-full block object-cover"
          />
        </span>
      </a>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="ml-[-8px] bg-[#f7f4ed] font-[480] text-[14px] h-[30px] relative flex shrink-0 justify-center items-center gap-x-1.5 [appearance:button] px-2.5 py-0 rounded-full border-[#fcfbf8] border hover:bg-[#eceae4] transition-colors"
      >
        <span className="text-center flex">Share</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M11.526 15.582a.75.75 0 0 0 1.004-.052l5-5a.75.75 0 1 0-1.06-1.06L12 13.94 7.53 9.47a.75.75 0 1 0-1.06 1.06l5 5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-[12px] shadow-lg border border-[#eceae4] py-2 z-50">
          {shareOptions.map((option, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 text-[14px] flex items-center gap-x-2 hover:bg-[#f7f4ed] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span>{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
          <div className="border-t border-[#eceae4] my-2"></div>
          <button
            className="w-full text-left px-4 py-2 text-[14px] flex items-center gap-x-2 hover:bg-[#f7f4ed] transition-colors text-[#5f5f5d]"
            onClick={() => setIsOpen(false)}
          >
            <span>⚙️</span>
            <span>Sharing Settings</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ActionButtons;
