function ProjectDropdown() {
  return (
    <div
      id="main-menu"
      className="[text-wrap-mode:nowrap] min-w-0 relative flex caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_1_1"
    >
      <button
        type="button"
        id="radix-_r_a9_"
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
              className="text-[rgba(28,28,28,0.5)] [text-wrap-mode:nowrap] align-middle w-4 h-4 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[rgba(28,28,28,0.5)] caret-[rgba(28,28,28,0.5)] [color-scheme:light]"
              data-svg-size="598"
            >
              <path
                fill="rgba(28, 28, 28, 0.5)"
                d="M11.526 15.582a.75.75 0 0 0 1.004-.052l5-5a.75.75 0 1 0-1.06-1.06L12 13.94 7.53 9.47a.75.75 0 1 0-1.06 1.06l5 5z"
                className="[text-wrap-mode:nowrap] inline fill-[rgba(28,28,28,0.5)] caret-[rgba(28,28,28,0.5)] [color-scheme:light]"
              ></path>
            </svg>
          </div>
          <div className="opacity-100 [text-wrap-mode:nowrap] caret-[#1c1c1c] [color-scheme:light]">
            <p className="opacity-100 [transform:none] text-[#5f5f5d] text-[12px] text-left text-ellipsis [text-wrap-mode:nowrap] w-full min-w-0 flex overflow-x-hidden overflow-y-hidden caret-[#5f5f5d] [color-scheme:light] my-0">
              Previewing last saved version
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ProjectDropdown;
