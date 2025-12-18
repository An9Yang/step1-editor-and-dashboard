import PageTitleBar from './PageTitleBar';

function ContentHeader() {
  return (
    <nav
      className="w-full sticky flex items-center caret-[#1c1c1c] [color-scheme:light] pr-6 pt-6 pb-4 top-0 bottom-auto inset-x-auto"
      data-component-id="Component_3_1"
    >
      <PageTitleBar />
      <div className="absolute flex justify-center caret-[#1c1c1c] [color-scheme:light] pointer-events-none top-6 bottom-auto inset-x-0">
        <div
          className="caret-[#1c1c1c] [color-scheme:light]"
          data-style-id="style-0-1765940093753"
        ></div>
      </div>
    </nav>
  );
}

export default ContentHeader;
