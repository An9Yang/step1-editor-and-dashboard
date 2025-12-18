import CloudButton1 from './CloudButton1';
import CloudButton2 from './CloudButton2';

function CloudActions() {
  return (
    <div
      className="opacity-100 max-w-full flex overflow-x-hidden overflow-y-hidden flex-col grow basis-[0%] gap-y-4 gap-x-4 caret-[#1c1c1c] [color-scheme:light] mt-4"
      data-component-id="Component_2_1_2_9"
    >
      <div className="flex overflow-x-hidden overflow-y-hidden flex-col justify-between items-start gap-y-8 gap-x-8 caret-[#1c1c1c] [color-scheme:light] pb-8">
        <CloudButton1 />
        <CloudButton2 />
      </div>
    </div>
  );
}

export default CloudActions;
