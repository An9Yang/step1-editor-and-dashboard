import ToggleButtons from './ToggleButtons';

function ViewToggle() {
  return (
    <div
      className="flex gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_3_2_1_1"
    >
      <ToggleButtons />
      <div className="bg-[#f7f4ed] h-fit relative caret-[#1c1c1c] [color-scheme:light] p-1 rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px]">
        <div className="bg-[#fcfbf8] w-[calc(50%_-_4px)] absolute shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-[#1c1c1c] [color-scheme:light] rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px] left-1 right-auto inset-y-1"></div>
        <div className="relative flex caret-[#1c1c1c] [color-scheme:light]">
          <button
            aria-label="Grid view"
            type="button"
            className="bg-[rgba(0,0,0,0)] text-[16px] w-9 h-7 relative z-10 flex justify-center items-center caret-[#1c1c1c] [color-scheme:light] [appearance:button] p-0 rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(28, 28, 28)"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              className="text-center align-middle w-4 h-4 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
              data-svg-size="1264"
            >
              <path
                fill="rgb(28, 28, 28)"
                d="M9.25 16c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25zm10 0c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25zm-10-10c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25zm10 0c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25zm-8.5 12A2.75 2.75 0 0 1 8 20.75H6A2.75 2.75 0 0 1 3.25 18v-2A2.75 2.75 0 0 1 6 13.25h2A2.75 2.75 0 0 1 10.75 16zm10 0A2.75 2.75 0 0 1 18 20.75h-2A2.75 2.75 0 0 1 13.25 18v-2A2.75 2.75 0 0 1 16 13.25h2A2.75 2.75 0 0 1 20.75 16zm-10-10A2.75 2.75 0 0 1 8 10.75H6A2.75 2.75 0 0 1 3.25 8V6A2.75 2.75 0 0 1 6 3.25h2A2.75 2.75 0 0 1 10.75 6zm10 0A2.75 2.75 0 0 1 18 10.75h-2A2.75 2.75 0 0 1 13.25 8V6A2.75 2.75 0 0 1 16 3.25h2A2.75 2.75 0 0 1 20.75 6z"
                className="inline fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
              ></path>
            </svg>
          </button>
          <button
            aria-label="List view"
            type="button"
            className="bg-[rgba(0,0,0,0)] text-[#5f5f5d] text-[16px] w-9 h-7 relative z-10 flex justify-center items-center caret-[#5f5f5d] [color-scheme:light] [appearance:button] p-0 rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(95, 95, 93)"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              className="text-center align-middle w-4 h-4 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
              data-svg-size="675"
            >
              <path
                fill="rgb(95, 95, 93)"
                d="M6.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M6.75 6a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M6.75 18a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M20 17.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM20 11.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM20 5.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z"
                className="inline fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewToggle;
