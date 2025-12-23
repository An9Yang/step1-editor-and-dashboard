import ActionButtons from './ActionButtons';

function HeaderActions() {
  return (
    <div
      className="[text-wrap-mode:nowrap] flex items-center gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_1_4"
    >
      <div className="[text-wrap-mode:nowrap] relative z-[1000] flex items-center gap-y-1.5 gap-x-1.5 caret-[#1c1c1c] [color-scheme:light]">
        <ActionButtons />
        <button
          id="export-button"
          type="button"
          className="bg-[#f7f4ed] font-[480] text-[14px] [text-wrap-mode:nowrap] h-7 flex justify-center items-center gap-x-1.5 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-[#1c1c1c] [color-scheme:light] [appearance:button] px-2.5 py-1 rounded-[6px]"
        >
          <span className="text-center">Export</span>
        </button>
        <button
          id="supabase-dropdown"
          type="button"
          className="bg-[#f7f4ed] font-[480] text-[14px] [text-wrap-mode:nowrap] h-7 aspect-square flex justify-center items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-[#1c1c1c] [color-scheme:light] [appearance:button] p-1 rounded-[6px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="109"
            height="113"
            fill="none"
            viewBox="0 0 109 113"
            className="text-center align-middle w-3.5 h-3.5 block overflow-hidden fill-none pointer-events-none"
          >
            <path
              fill='url("#supabase_logo_svg__a")'
              d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
            ></path>
            <path
              fill='url("#supabase_logo_svg__b")'
              fillOpacity="0.2"
              d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
            ></path>
            <path
              fill="rgb(62, 207, 142)"
              d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875z"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          id="github-sync"
          className="bg-[#f7f4ed] font-[480] text-[14px] [text-wrap-mode:nowrap] h-7 flex justify-center items-center gap-x-1.5 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-[#1c1c1c] [color-scheme:light] [appearance:button] px-2.5 py-1 rounded-[6px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 96"
            fill="rgb(28, 28, 28)"
            className="w-3.5 h-3.5 block shrink-0 fill-[#1c1c1c]"
          >
            <path
              fill="rgb(28, 28, 28)"
              fillRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a47 47 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-center">GitHub</span>
        </button>
        <button
          id="publish-menu"
          type="button"
          className="bg-[#1e52f1] text-[#f0f6ff] font-[480] text-[14px] [text-wrap-mode:nowrap] h-7 flex justify-center items-center gap-y-1.5 gap-x-1.5 caret-[#f0f6ff] [color-scheme:light] [appearance:button] px-3 py-2 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px]"
        >
          <span className="text-center [text-wrap-mode:nowrap] flex caret-[#f0f6ff] [color-scheme:light]">
            Publish
          </span>
        </button>
      </div>
    </div>
  );
}

export default HeaderActions;
