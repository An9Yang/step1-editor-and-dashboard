function SidebarUserMenu({ isCollapsed }) {
  return (
    <div
      className={`ml-[-4px] relative flex items-center caret-[#1c1c1c] [color-scheme:light] ${isCollapsed ? 'justify-center' : ''}`}
      data-component-id="Component_2_3"
    >
      <div
        type="button"
        id="radix-_r_3l_"
        className="w-10 h-10 absolute flex justify-center items-center caret-[#1c1c1c] [color-scheme:light] rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px] group"
      >
        <div className="w-fit flex caret-[#1c1c1c] [color-scheme:light]">
          <span className="text-[12px] w-7 h-7 relative flex overflow-x-hidden overflow-y-hidden shrink-0 items-center caret-[#1c1c1c] [color-scheme:light] rounded-br-full rounded-t-full rounded-bl-full border-[rgba(0,0,0,0)] border">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c"
              className="align-middle w-full h-full max-w-full block object-cover caret-[#1c1c1c] [color-scheme:light]"
            />
          </span>
        </div>
      </div>
      <div className="flex grow justify-end caret-[#1c1c1c] [color-scheme:light] pointer-events-none">
        <div className="w-8 flex justify-center caret-[#1c1c1c] [color-scheme:light]">
          <button
            aria-label="Inbox"
            type="button"
            id="radix-_r_e_"
            className="bg-[rgba(0,0,0,0)] text-[#5f5f5d] text-[16px] w-8 h-8 flex justify-center items-center caret-[#5f5f5d] [color-scheme:light] [appearance:button] p-0 rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px]"
          >
            <div className="text-center relative caret-[#5f5f5d] [color-scheme:light]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(95, 95, 93)"
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                className="align-middle w-5 h-5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
                data-svg-size="931"
              >
                <path
                  fill="rgb(95, 95, 93)"
                  d="M20.25 12.75h-4.559a3.65 3.65 0 0 1-3.591 3h-.2a3.65 3.65 0 0 1-3.591-3H3.75V16A2.25 2.25 0 0 0 6 18.25h12A2.25 2.25 0 0 0 20.25 16zm-12.365-7a2.25 2.25 0 0 0-2.028 1.273L3.973 10.94q-.072.15-.12.31H9a.75.75 0 0 1 .75.75v.1a2.15 2.15 0 0 0 2.15 2.15h.2a2.15 2.15 0 0 0 2.15-2.15V12a.75.75 0 0 1 .75-.75h5.143a2 2 0 0 0-.115-.299l-1.886-3.926a2.25 2.25 0 0 0-2.029-1.275zM21.75 16A3.75 3.75 0 0 1 18 19.75H6A3.75 3.75 0 0 1 2.25 16v-4.085c0-.563.127-1.12.371-1.627l1.886-3.915A3.75 3.75 0 0 1 7.885 4.25h8.228a3.75 3.75 0 0 1 3.38 2.126l1.887 3.926c.243.507.37 1.062.37 1.624z"
                  className="inline fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
                ></path>
              </svg>
              <span className="bg-[#ff5757] w-2 h-2 absolute top-[-2px] right-[-2px] z-10 block caret-[#5f5f5d] [color-scheme:light] rounded-br-full rounded-t-full rounded-bl-full left-auto bottom-auto"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarUserMenu;
