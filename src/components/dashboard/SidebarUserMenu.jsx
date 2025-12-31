import { useState, useRef, useEffect } from 'react';

function SidebarUserMenu({ isCollapsed, onSettingsClick, onPlansClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setIsOpen(false);
      });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleMenuItemClick = (action) => {
    setIsOpen(false);
    if (action === 'settings' && onSettingsClick) {
      onSettingsClick();
    } else if (action === 'plans' && onPlansClick) {
      onPlansClick();
    } else if (action === 'logout') {
      console.log('Logout clicked');
    }
  };

  return (
    <div
      ref={menuRef}
      className={`ml-[-4px] relative flex items-center caret-[#1c1c1c] [color-scheme:light] ${isCollapsed ? 'justify-center' : ''}`}
      data-component-id="Component_2_3"
    >
      {/* User Avatar - Clickable */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex justify-center items-center caret-[#1c1c1c] [color-scheme:light] rounded-[8px] hover:bg-[#f7f4ed] transition-colors cursor-pointer"
      >
        <span className="text-[12px] w-7 h-7 relative flex overflow-hidden shrink-0 items-center rounded-full border-2 border-transparent hover:border-[#d0cdc6] transition-colors">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c"
            className="w-full h-full block object-cover"
            alt="User avatar"
          />
        </span>
      </button>

      {/* Dropdown Menu - Popup Upward */}
      {isOpen && (
        <div
          className="absolute bottom-full left-0 mb-2 w-[220px] bg-[#fcfbf8] rounded-[12px] border border-[#eceae4] shadow-[0_4px_20px_rgba(0,0,0,0.12)] overflow-hidden z-50 animate-[fadeSlideUp_150ms_ease-out]"
          style={{
            animation: 'fadeSlideUp 150ms ease-out'
          }}
        >
          {/* User Info Section */}
          <div className="px-3 py-3 border-b border-[#eceae4]">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 flex overflow-hidden shrink-0 items-center rounded-full">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c"
                  className="w-full h-full block object-cover"
                  alt="User avatar"
                />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-[14px] font-medium text-[#1c1c1c] truncate">HaoCheng</span>
                <span className="text-[12px] text-[#9a9a98] truncate">hc@example.com</span>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1.5">
            <button
              onClick={() => handleMenuItemClick('settings')}
              className="w-full px-3 py-2 flex items-center gap-2.5 text-[14px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Settings
            </button>

            <button
              onClick={() => handleMenuItemClick('plans')}
              className="w-full px-3 py-2 flex items-center gap-2.5 text-[14px] text-[#1c1c1c] hover:bg-[#f7f4ed] transition-colors text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Plans & Usage
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-[#eceae4]"></div>

          {/* Logout */}
          <div className="py-1.5">
            <button
              onClick={() => handleMenuItemClick('logout')}
              className="w-full px-3 py-2 flex items-center gap-2.5 text-[14px] text-[#dc2626] hover:bg-[#fef2f2] transition-colors text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log out
            </button>
          </div>
        </div>
      )}

      {/* Inbox Button */}
      <div className="flex grow justify-end caret-[#1c1c1c] [color-scheme:light]">
        <div className="w-8 flex justify-center caret-[#1c1c1c] [color-scheme:light]">
          <button
            aria-label="Inbox"
            type="button"
            className="bg-transparent text-[#5f5f5d] text-[16px] w-8 h-8 flex justify-center items-center [appearance:button] p-0 rounded-[8px] hover:bg-[#f7f4ed] transition-colors"
          >
            <div className="text-center relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(95, 95, 93)"
                viewBox="0 0 24 24"
                className="w-5 h-5 block overflow-hidden shrink-0 fill-[#5f5f5d]"
              >
                <path
                  fill="rgb(95, 95, 93)"
                  d="M20.25 12.75h-4.559a3.65 3.65 0 0 1-3.591 3h-.2a3.65 3.65 0 0 1-3.591-3H3.75V16A2.25 2.25 0 0 0 6 18.25h12A2.25 2.25 0 0 0 20.25 16zm-12.365-7a2.25 2.25 0 0 0-2.028 1.273L3.973 10.94q-.072.15-.12.31H9a.75.75 0 0 1 .75.75v.1a2.15 2.15 0 0 0 2.15 2.15h.2a2.15 2.15 0 0 0 2.15-2.15V12a.75.75 0 0 1 .75-.75h5.143a2 2 0 0 0-.115-.299l-1.886-3.926a2.25 2.25 0 0 0-2.029-1.275zM21.75 16A3.75 3.75 0 0 1 18 19.75H6A3.75 3.75 0 0 1 2.25 16v-4.085c0-.563.127-1.12.371-1.627l1.886-3.915A3.75 3.75 0 0 1 7.885 4.25h8.228a3.75 3.75 0 0 1 3.38 2.126l1.887 3.926c.243.507.37 1.062.37 1.624z"
                ></path>
              </svg>
              <span className="bg-[#ff5757] w-2 h-2 absolute top-[-2px] right-[-2px] z-10 block rounded-full"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarUserMenu;
