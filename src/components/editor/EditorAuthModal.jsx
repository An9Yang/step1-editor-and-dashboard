import AuthModalContent from './AuthModalContent';

function EditorAuthModal() {
  return (
    <div
      role="dialog"
      aria-hidden="true"
      className='leading-normal [font-family:-apple-system,"system-ui","Segoe_UI",Roboto,Helvetica,Arial,sans-serif,"Apple_Color_Emoji","Segoe_UI_Emoji","Segoe_UI_Symbol",system-ui,sans-serif] text-[14px] w-full min-h-full absolute z-[99999] flex overflow-x-hidden flex-col items-center left-0 right-auto top-0 bottom-auto'
      data-component-id="Component_3"
    >
      <AuthModalContent />
      <a
        href="https://www.netlify.com"
        className="text-[#a3a9ac] font-medium text-center [white-space-collapse:collapse] [text-wrap-mode:nowrap] w-px h-px absolute block overflow-x-hidden overflow-y-hidden caret-[#a3a9ac] -m-px"
      >
        <span
          className="[text-wrap-mode:nowrap] w-8 h-8 block caret-[#a3a9ac] mt-auto mb-2 mx-auto"
          data-style-id="style-6-1765953848772"
        ></span>
        Coded by Netlify
      </a>
    </div>
  );
}

export default EditorAuthModal;
