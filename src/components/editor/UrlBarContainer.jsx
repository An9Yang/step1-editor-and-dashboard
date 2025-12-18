import PreviewUrlBar from './PreviewUrlBar';

function UrlBarContainer() {
  return (
    <div
      className="[text-wrap-mode:nowrap] absolute caret-[#1c1c1c] [color-scheme:light] left-2/4 right-auto top-2/4 bottom-auto"
      data-style-id="style-0-1765953848771"
      data-component-id="Component_1_3"
    >
      <div
        id="preview-url-bar"
        className="[text-wrap-mode:nowrap] min-w-0 relative flex grow items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light]"
      >
        <PreviewUrlBar />
      </div>
    </div>
  );
}

export default UrlBarContainer;
