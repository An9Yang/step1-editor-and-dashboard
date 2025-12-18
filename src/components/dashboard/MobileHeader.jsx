import MobileHeaderActions from './MobileHeaderActions';

function MobileHeader() {
  return (
    <div
      className="bg-[rgba(252,251,248,0.9)] sticky z-30 hidden justify-between items-center backdrop-blur-sm caret-[#1c1c1c] [color-scheme:light] px-4 py-3 top-0 bottom-auto inset-x-auto"
      data-component-id="Component_1"
    >
      <div className="flex items-center gap-y-6 gap-x-6 caret-[#1c1c1c] [color-scheme:light]">
        <button
          type="button"
          aria-label="Open sidebar"
          className="bg-[rgba(0,0,0,0)] text-[16px] w-8 h-8 block caret-[#1c1c1c] [color-scheme:light] [appearance:button] p-0"
        ></button>
        <a
          href="/"
          className="block shrink-0 caret-[#1c1c1c] [color-scheme:light]"
        >
          <div className="flex flex-col gap-y-1.5 gap-x-1.5 caret-[#1c1c1c] [color-scheme:light]"></div>
        </a>
      </div>
      <MobileHeaderActions />
    </div>
  );
}

export default MobileHeader;
