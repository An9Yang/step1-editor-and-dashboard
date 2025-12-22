import { useState } from 'react';

function ActionButtons() {
  const [isOpen, setIsOpen] = useState(false);

  // Link icon
  const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(28, 28, 28)" className="w-4 h-4 shrink-0">
      <path d="M12.75 18.75v-1.085q1.812-.164 3.031-1.453Q17 14.922 17 13v-.25h-2v.25q0 1.25-.875 2.125T12 16t-2.125-.875T9 13v-2q0-1.25.875-2.125T12 8q.727 0 1.35.328.625.328 1.025.875l1.5-1.031Q15.18 7.14 14.191 6.57 13.203 6 12 6q-2.078 0-3.54 1.46Q7 8.923 7 11v2q0 2.078 1.46 3.539 1.462 1.461 3.54 1.461v.75a.75.75 0 0 0 1.5 0v-.75h.25a.75.75 0 0 0 0-1.5h-.25v-1.75a.75.75 0 0 0-1.5 0z" />
      <path d="M10.04 6.04a.75.75 0 0 1 0-1.06l1.94-1.94a4.25 4.25 0 0 1 6.01 6.01l-1.94 1.94a.75.75 0 1 1-1.06-1.06l1.94-1.94a2.75 2.75 0 0 0-3.89-3.89l-1.94 1.94a.75.75 0 0 1-1.06 0m3.92 11.92a.75.75 0 0 1 0 1.06l-1.94 1.94a4.25 4.25 0 0 1-6.01-6.01l1.94-1.94a.75.75 0 0 1 1.06 1.06l-1.94 1.94a2.75 2.75 0 0 0 3.89 3.89l1.94-1.94a.75.75 0 0 1 1.06 0m1.06-9.94a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0" />
    </svg>
  );

  // Email icon
  const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(28, 28, 28)" className="w-4 h-4 shrink-0">
      <path d="M3.25 5.5A2.25 2.25 0 0 1 5.5 3.25h13A2.25 2.25 0 0 1 20.75 5.5v13a2.25 2.25 0 0 1-2.25 2.25h-13A2.25 2.25 0 0 1 3.25 18.5zm1.5 1.414V18.5c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V6.914l-6.614 5.29a1.25 1.25 0 0 1-1.562 0zm.972-1.164h12.556L12.39 10.42a.25.25 0 0 1-.312 0z" />
    </svg>
  );

  // X (Twitter) icon
  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(28, 28, 28)" className="w-4 h-4 shrink-0">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  // Slack icon
  const SlackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(28, 28, 28)" className="w-4 h-4 shrink-0">
      <path d="M6.527 14.514A1.636 1.636 0 0 1 4.89 16.15a1.636 1.636 0 0 1-1.637-1.636 1.636 1.636 0 0 1 1.637-1.637h1.637zm.818 0a1.636 1.636 0 0 1 1.637-1.637 1.636 1.636 0 0 1 1.636 1.637v4.09a1.636 1.636 0 0 1-1.636 1.637 1.636 1.636 0 0 1-1.637-1.636zm1.637-7.968A1.636 1.636 0 0 1 7.345 4.91a1.636 1.636 0 0 1 1.637-1.637 1.636 1.636 0 0 1 1.636 1.637v1.636zm0 .818a1.636 1.636 0 0 1 1.636 1.637 1.636 1.636 0 0 1-1.636 1.636H4.89A1.636 1.636 0 0 1 3.254 9a1.636 1.636 0 0 1 1.637-1.636zm7.968 1.637a1.636 1.636 0 0 1 1.636-1.637 1.636 1.636 0 0 1 1.637 1.637A1.636 1.636 0 0 1 18.586 10.6h-1.636zm-.818 0A1.636 1.636 0 0 1 14.495 10.6a1.636 1.636 0 0 1-1.636-1.636V4.909a1.636 1.636 0 0 1 1.636-1.636 1.636 1.636 0 0 1 1.637 1.636zm-1.637 7.968a1.636 1.636 0 0 1 1.637 1.636 1.636 1.636 0 0 1-1.637 1.637 1.636 1.636 0 0 1-1.636-1.637v-1.636zm0-.818a1.636 1.636 0 0 1-1.636-1.637 1.636 1.636 0 0 1 1.636-1.636h4.091a1.636 1.636 0 0 1 1.637 1.636 1.636 1.636 0 0 1-1.637 1.637z" />
    </svg>
  );

  // Settings icon
  const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
      <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z" />
    </svg>
  );

  const shareOptions = [
    { icon: LinkIcon, label: 'Copy Link', action: 'copy' },
    { icon: EmailIcon, label: 'Share via Email', action: 'email' },
    { icon: XIcon, label: 'Share to X', action: 'twitter' },
    { icon: SlackIcon, label: 'Share to Slack', action: 'slack' },
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
              className="w-full text-left px-4 py-2 text-[14px] flex items-center gap-x-2.5 hover:bg-[#f7f4ed] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <option.icon />
              <span>{option.label}</span>
            </button>
          ))}
          <div className="border-t border-[#eceae4] my-2"></div>
          <button
            className="w-full text-left px-4 py-2 text-[14px] flex items-center gap-x-2.5 hover:bg-[#f7f4ed] transition-colors text-[#5f5f5d]"
            onClick={() => setIsOpen(false)}
          >
            <SettingsIcon />
            <span>Sharing Settings</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ActionButtons;
