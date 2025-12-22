import MessageHeader from './MessageHeader';
import MessageText from './MessageText';

function MessageContent() {
  return (
    <div
      className="relative caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_1_1_2"
    >
      <div className="bg-[#f7f4ed] rounded-[16px] rounded-tr-[4px] flex flex-col items-end gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] p-3 group">
        <MessageHeader />
        <MessageText />
        <div className="w-full flex justify-end gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            aria-label="Copy message"
            className="bg-[rgba(0,0,0,0)] text-[#5f5f5d] text-[16px] flex justify-center items-center caret-[#5f5f5d] [color-scheme:light] [appearance:button] p-1 rounded-[6px] hover:bg-[#eceae4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(95, 95, 93)"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              className="text-center align-middle w-4 h-4 block overflow-hidden shrink-0 fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
            >
              <path
                fill="rgb(95, 95, 93)"
                d="M19.25 10c0-.69-.56-1.25-1.25-1.25h-6c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25zm-6-4c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h3.25V10A2.75 2.75 0 0 1 12 7.25h1.25zm1.5 1.25H18A2.75 2.75 0 0 1 20.75 10v8A2.75 2.75 0 0 1 18 20.75h-6A2.75 2.75 0 0 1 9.25 18v-1.25H6A2.75 2.75 0 0 1 3.25 14V6A2.75 2.75 0 0 1 6 3.25h6A2.75 2.75 0 0 1 14.75 6z"
                className="inline fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageContent;
