import IframeContent from './IframeContent';

function PreviewIframe() {
  return (
    <form
      id="chat-input"
      className="bg-[#f7f4ed] relative flex flex-col gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] mb-0 p-3 rounded-br-[24px] rounded-t-[24px] rounded-bl-[24px] border-[#eceae4] border group"
      data-component-id="Component_2_2_2"
    >
      <div className="caret-[#1c1c1c] [color-scheme:light]">
        <div className="w-full relative flex grow basis-[0%] items-center caret-[#1c1c1c] [color-scheme:light] m-1">
          <div
            tabIndex="0"
            className="leading-snug [font-variant-ligatures:none] [font-variant-caps:normal] normal-nums [font-variant-east-asian:normal] [font-variant-alternates:normal] [font-variant-position:normal] [font-variant-emoji:normal] [white-space-collapse:break-spaces] [text-wrap-mode:wrap] w-full min-w-0 min-h-10 max-h-[379.4px] relative overflow-x-hidden outline outline-2 outline-[rgba(0,0,0,0)] outline-offset-2 caret-[#1c1c1c] [color-scheme:light]"
          >
            <p className="[font-variant-ligatures:none] [font-variant-caps:normal] normal-nums [font-variant-east-asian:normal] [font-variant-alternates:normal] [font-variant-position:normal] [font-variant-emoji:normal] caret-[#1c1c1c] [color-scheme:light] my-0">
              <br />
            </p>
          </div>
        </div>
      </div>
      <IframeContent />
    </form>
  );
}

export default PreviewIframe;
