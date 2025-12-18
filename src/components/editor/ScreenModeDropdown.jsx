import ScreenModeOption1 from './ScreenModeOption1';
import ScreenModeOption2 from './ScreenModeOption2';
import ScreenModeOption3 from './ScreenModeOption3';

function ScreenModeDropdown() {
  return (
    <div
      className="[text-wrap-mode:nowrap] flex items-center gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_1_2_2"
    >
      <ul className="[text-wrap-mode:nowrap] flex items-center gap-y-1 gap-x-1 list-none caret-[#1c1c1c] [color-scheme:light] my-0 pl-0">
        <ScreenModeOption1 />
        <ScreenModeOption2 />
        <ScreenModeOption3 />
      </ul>
    </div>
  );
}

export default ScreenModeDropdown;
