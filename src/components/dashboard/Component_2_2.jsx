import Component_2_2_1 from './Component_2_2_1';
import Component_2_2_2 from './Component_2_2_2';
import Component_2_2_3 from './Component_2_2_3';

function Component_2_2() {
  return (
    <div
      className="min-h-0 relative grow basis-[0%] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
      data-component-id="Component_2_2"
    >
      <nav className="h-full overflow-x-hidden caret-[#1c1c1c] [color-scheme:light] pointer-events-none">
        <div className="flex flex-col gap-y-4 gap-x-4 caret-[#1c1c1c] [color-scheme:light] pointer-events-none">
          <Component_2_2_1 />
          <Component_2_2_2 />
          <Component_2_2_3 />
        </div>
      </nav>
    </div>
  );
}

export default Component_2_2;
