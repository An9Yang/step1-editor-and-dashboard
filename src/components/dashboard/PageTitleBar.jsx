function PageTitleBar() {
  return (
    <div
      className="flex items-center gap-y-4 gap-x-4 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_3_1_1"
    >
      <div className="caret-[#1c1c1c] [color-scheme:light] ml-8 mt-2.5">
        <div className="flex items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light]">
          <span className="flex items-center caret-[#1c1c1c] [color-scheme:light]">
            <span className="font-[480] text-[20px] block caret-[#1c1c1c] [color-scheme:light]">
              Projects
            </span>
          </span>
          <button
            type="button"
            id="radix-_r_b0_"
            className="bg-[rgba(0,0,0,0)] font-[480] text-[14px] [white-space-collapse:collapse] [text-wrap-mode:nowrap] w-8 h-8 flex justify-center items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] [appearance:button] px-2 py-0 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgba(95, 95, 93, 0.5)"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              className="text-[rgba(95,95,93,0.5)] text-center [text-wrap-mode:nowrap] align-middle w-6 h-6 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[rgba(95,95,93,0.5)] caret-[rgba(95,95,93,0.5)] [color-scheme:light] pointer-events-none"
              data-svg-size="686"
            >
              <path
                fill="rgba(95, 95, 93, 0.5)"
                d="M6.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
                className="[text-wrap-mode:nowrap] inline fill-[rgba(95,95,93,0.5)] caret-[rgba(95,95,93,0.5)] [color-scheme:light] pointer-events-none"
              ></path>
            </svg>
            <span className="text-center [text-wrap-mode:nowrap] w-px h-px absolute block overflow-x-hidden overflow-y-hidden caret-[#1c1c1c] [color-scheme:light] -m-px">
              More options
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageTitleBar;
