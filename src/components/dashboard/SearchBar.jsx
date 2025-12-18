import ViewToggle from './ViewToggle';

function SearchBar() {
  return (
    <div
      className="bg-[#fcfbf8] caret-[#1c1c1c] [color-scheme:light] pt-8 pb-4 px-8"
      data-component-id="Component_3_2_1"
    >
      <div className="flex justify-between gap-y-4 gap-x-4 caret-[#1c1c1c] [color-scheme:light]">
        <div className="w-60 h-fit relative caret-[#1c1c1c] [color-scheme:light]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(95, 95, 93)"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            className="text-[#5f5f5d] align-middle w-4 h-4 absolute block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light] left-3 right-auto top-2/4 bottom-auto"
            data-svg-size="682"
            data-style-id="style-1-1765940093753"
          >
            <path
              fill="rgb(95, 95, 93)"
              d="M15.25 10a5.25 5.25 0 1 0-10.5 0 5.25 5.25 0 0 0 10.5 0m1.5 0a6.72 6.72 0 0 1-1.477 4.212l5.257 5.258a.75.75 0 1 1-1.06 1.06l-5.258-5.257A6.75 6.75 0 1 1 16.75 10"
              className="inline fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
            ></path>
          </svg>
          <input
            placeholder="Search projects..."
            type="text"
            className="bg-[#fcfbf8] text-[14px] w-full h-9 flex caret-[#1c1c1c] [color-scheme:light] px-9 py-1 rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] border-[#eceae4] border"
          />
        </div>
        <ViewToggle />
      </div>
    </div>
  );
}

export default SearchBar;
