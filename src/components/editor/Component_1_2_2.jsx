import Component_1_2_2_1 from './Component_1_2_2_1';
import Component_1_2_2_2 from './Component_1_2_2_2';
import Component_1_2_2_3 from './Component_1_2_2_3';

function Component_1_2_2() {
  return (
    <div
      className="[text-wrap-mode:nowrap] flex items-center gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_1_2_2"
    >
      <ul className="[text-wrap-mode:nowrap] flex items-center gap-y-1 gap-x-1 list-none caret-[#1c1c1c] [color-scheme:light] my-0 pl-0">
        <Component_1_2_2_1 />
        <Component_1_2_2_2 />
        <Component_1_2_2_3 />
      </ul>
    </div>
  );
}

export default Component_1_2_2;
