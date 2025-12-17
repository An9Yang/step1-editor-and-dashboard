import Component_2_2_3_1 from './Component_2_2_3_1';

function Component_2_2_3() {
  return (
    <div
      className="flex flex-col gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
      data-component-id="Component_2_2_3"
    >
      <div className="text-[#5f5f5d] text-[14px] h-8 flex items-center caret-[#5f5f5d] [color-scheme:light] pointer-events-none px-2">
        Resources
      </div>
      <Component_2_2_3_1 />
    </div>
  );
}

export default Component_2_2_3;
