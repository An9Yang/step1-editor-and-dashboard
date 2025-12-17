import Component_2_1_1 from './Component_2_1_1';
import Component_2_1_2 from './Component_2_1_2';

function Component_2_1() {
  return (
    <div
      className="min-h-0 flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light] overflow-y-auto"
      data-component-id="Component_2_1"
    >
      <div className="w-full min-h-0 relative flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
        <div className="w-full h-full caret-[#1c1c1c] [color-scheme:light]">
          <div className="grow-0 basis-auto w-full relative shrink-0 caret-[#1c1c1c] [color-scheme:light] flex flex-col gap-4 p-4">
            <Component_2_1_1 />
            <Component_2_1_2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_2_1;
