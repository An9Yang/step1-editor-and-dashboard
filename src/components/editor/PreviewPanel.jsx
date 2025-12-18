import ComponentToolbar from './ComponentToolbar';
import PreviewIframe from './PreviewIframe';

function PreviewPanel() {
  return (
    <div
      type="button"
      className="caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_2"
    >
      <div className="w-full max-w-screen-md max-h-[calc(100%_-_37px)] flex flex-col shrink-0 caret-[#1c1c1c] [color-scheme:light] mx-auto">
        <ComponentToolbar />
        <div className="relative caret-[#1c1c1c] [color-scheme:light]"></div>
        <PreviewIframe />
        <div className="bg-[#fcfbf8] w-full h-2 z-10 caret-[#1c1c1c] [color-scheme:light]"></div>
      </div>
    </div>
  );
}

export default PreviewPanel;
