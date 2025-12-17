import Component_3_2_1 from './Component_3_2_1';
import Component_3_2_2 from './Component_3_2_2';

function Component_3_2() {
  return (
    <main
      className="relative overflow-x-scroll overflow-y-scroll grow basis-[0%] caret-[#1c1c1c] [color-scheme:light] pr-4 rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px]"
      data-component-id="Component_3_2"
    >
      <div className="h-full relative z-10 caret-[#1c1c1c] [color-scheme:light]">
        <div className="h-full relative flex flex-col caret-[#1c1c1c] [color-scheme:light]">
          <Component_3_2_1 />
          <Component_3_2_2 />
        </div>
      </div>
    </main>
  );
}

export default Component_3_2;
