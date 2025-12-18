import ActionSubmenu from './ActionSubmenu';

function InputActions() {
  return (
    <div
      className="opacity-100 max-w-full relative caret-[#1c1c1c] [color-scheme:light] mt-4"
      data-component-id="Component_2_1_2_2"
    >
      <div className="text-zinc-700 leading-[1.75] max-w-full caret-zinc-700 [color-scheme:light]">
        <p className="leading-[24.96px] caret-zinc-700 [color-scheme:light] mt-0 mb-5">
          Now I have a clear picture of the Allbirds website. I'll recreate it
          pixel-perfectly with:
        </p>
        <p className="leading-[24.96px] caret-zinc-700 [color-scheme:light] my-5">
          <strong className="text-zinc-900 font-[480] caret-zinc-900 [color-scheme:light]">
            Design Analysis:
          </strong>
        </p>
        <ActionSubmenu />
        <p className="leading-[24.96px] caret-zinc-700 [color-scheme:light] mt-5 mb-0">
          Let me build this now:
        </p>
      </div>
    </div>
  );
}

export default InputActions;
