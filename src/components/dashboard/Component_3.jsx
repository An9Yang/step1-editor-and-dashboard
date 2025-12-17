import Component_3_1 from './Component_3_1';
import Component_3_2 from './Component_3_2';

function Component_3() {
  return (
    <div
      className="flex overflow-x-hidden overflow-y-hidden flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_3"
    >
      <div className="caret-[#1c1c1c] [color-scheme:light]"></div>
      <div className="flex flex-col caret-[#1c1c1c] [color-scheme:light] pl-4">
        <Component_3_1 />
        <Component_3_2 />
      </div>
    </div>
  );
}

export default Component_3;
