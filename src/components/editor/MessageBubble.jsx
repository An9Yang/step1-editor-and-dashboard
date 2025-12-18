function MessageBubble() {
  return (
    <div
      className="text-[#5f5f5d] w-full flex flex-col items-center caret-[#5f5f5d] [color-scheme:light] mb-2"
      data-component-id="Component_2_1_1_1"
    >
      <div className="text-[12px] flex items-center gap-y-1 gap-x-1 caret-[#5f5f5d] [color-scheme:light] mb-1">
        <span className="font-[480] block caret-[#5f5f5d] [color-scheme:light]">
          Dec 15
        </span>
        <span className="block caret-[#5f5f5d] [color-scheme:light]">
          at 11:08 AM
        </span>
      </div>
      <div className="flex items-center self-start gap-y-1.5 gap-x-1.5 caret-[#5f5f5d] [color-scheme:light] ml-5 mt-1">
        <span className="text-[10px] w-5 h-5 relative flex overflow-x-hidden overflow-y-hidden shrink-0 items-center caret-[#5f5f5d] [color-scheme:light] rounded-br-full rounded-t-full rounded-bl-full border-[rgba(0,0,0,0)] border">
          <img
            src="https://avatars.githubusercontent.com/u/39055087?v=4"
            className="align-middle w-full h-full max-w-full block object-cover caret-[#5f5f5d] [color-scheme:light]"
          />
        </span>
        <a
          href="/@ba2LJRWhD0UG5mWjRS7DWYdjnwU2"
          className="leading-none text-[14px] text-ellipsis [white-space-collapse:collapse] [text-wrap-mode:nowrap] min-w-0 block overflow-x-hidden overflow-y-hidden caret-[#5f5f5d] [color-scheme:light]"
        >
          smile.xuhc@gmail.com
        </a>
      </div>
    </div>
  );
}

export default MessageBubble;
