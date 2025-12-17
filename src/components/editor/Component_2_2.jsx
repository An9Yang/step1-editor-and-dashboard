import Component_2_2_1 from './Component_2_2_1';
import Component_2_2_2 from './Component_2_2_2';

function Component_2_2() {
  return (
    <div
      type="button"
      className="caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_2"
    >
      <div className="w-full max-w-screen-md max-h-[calc(100%_-_37px)] flex flex-col shrink-0 caret-[#1c1c1c] [color-scheme:light] mx-auto">
        <Component_2_2_1 />
        <div className="relative caret-[#1c1c1c] [color-scheme:light]"></div>
        <Component_2_2_2 />
        <div className="bg-[#fcfbf8] w-full h-2 z-10 caret-[#1c1c1c] [color-scheme:light]"></div>
      </div>
    </div>
  );
}

export default Component_2_2;
