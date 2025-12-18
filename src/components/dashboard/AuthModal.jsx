function AuthModal() {
  return (
    <div
      className="[white-space-collapse:collapse] [text-wrap-mode:nowrap] w-px h-px absolute flex overflow-x-hidden overflow-y-hidden flex-col grow -m-px"
      data-component-id="Component_4"
    >
      <div
        className="bg-white [text-wrap-mode:nowrap] relative opacity-0 p-8"
        data-style-id="style-2-1765940093753"
      >
        <button className="bg-white text-[#a3a9ac] leading-[24px] font-medium [text-wrap-mode:nowrap] w-6 h-6 absolute block caret-[#a3a9ac] m-1.5 p-0 rounded-br-[50%] rounded-t-[50%] rounded-bl-[50%] left-auto right-0 top-0 bottom-auto">
          <span className="text-center [text-wrap-mode:nowrap] w-px h-px absolute block overflow-x-hidden overflow-y-hidden caret-[#a3a9ac] -m-px">
            Close
          </span>
        </button>
        <div className="mt-[-8px] [text-wrap-mode:nowrap] flex mb-8">
          <button className="bg-white text-[#0e1e25] leading-[24px] font-bold text-[16px] [text-wrap-mode:nowrap] w-full relative block caret-[#0e1e25] py-1.5 rounded-t-[4px]">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
