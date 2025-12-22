import RefreshButton from './RefreshButton';
import ScreenModeDropdown from './ScreenModeDropdown';
import ViewModeToggle from './ViewModeToggle';

function ToolbarControls() {
  return (
    <div
      className="[text-wrap-mode:nowrap] flex items-center gap-x-3 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_1_2"
    >
      <ViewModeToggle />
      <div className="[text-wrap-mode:nowrap] flex items-center gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]">
        <RefreshButton />
        <ScreenModeDropdown />
        <div
          type="button"
          className="[transform:none] origin-[50%_50%_0px] [text-wrap-mode:nowrap] caret-[#1c1c1c] [color-scheme:light]"
        >
          <button className="bg-[rgba(0,0,0,0)] font-[480] text-[14px] [text-wrap-mode:nowrap] h-7 aspect-square inline-flex justify-center items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] [appearance:button] p-1 rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(28, 28, 28)"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              className="text-center [text-wrap-mode:nowrap] align-middle w-3.5 h-3.5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
              data-svg-size="577"
            >
              <path
                fill="rgb(28, 28, 28)"
                d="M11.25 18v-5.25H6a.75.75 0 0 1 0-1.5h5.25V6a.75.75 0 0 1 1.5 0v5.25H18a.75.75 0 0 1 0 1.5h-5.25V18a.75.75 0 0 1-1.5 0"
                className="[text-wrap-mode:nowrap] inline fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToolbarControls;
