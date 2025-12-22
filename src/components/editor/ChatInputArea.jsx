import InputButton1 from './InputButton1';
import InputActions from './InputActions';
import InputButton3 from './InputButton3';
import InputButton4 from './InputButton4';
import InputButton5 from './InputButton5';
import InputButton6 from './InputButton6';
import InputButton7 from './InputButton7';
import InputButton8 from './InputButton8';
import CloudActions from './CloudActions';

function ChatInputArea() {
  return (
    <div
      className="w-full caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_1_2"
    >
      {/* AI message - aligned left */}
      <div
        id="aimsg_01kcfzngbzf26s6xxd3n2vppfk"
        className="min-h-[auto] w-full flex flex-col items-start caret-[#1c1c1c] [color-scheme:light] pb-2 group"
      >
        {/* AI Avatar and Name */}
        <div className="flex items-center gap-x-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <span className="text-[14px] font-[480] text-[#5f5f5d]">Step1 AI</span>
        </div>
        {/* AI Response Container with visual styling */}
        <div className="max-w-[85%] caret-[#1c1c1c] [color-scheme:light]">
          <div className="relative bg-[#f7f4ed] rounded-[16px] rounded-tl-[4px] px-4 py-3.5 caret-[#1c1c1c] [color-scheme:light]">
            <div className="[overflow-wrap:anywhere] leading-[22px] text-left flex flex-col caret-[#1c1c1c] [color-scheme:light]">
              <div className="text-[#5f5f5d] flex flex-col caret-[#5f5f5d] [color-scheme:light]">
                <div className="font-[480] text-[14px] [white-space-collapse:collapse] [text-wrap-mode:nowrap] h-6 flex items-center caret-[#5f5f5d] [color-scheme:light]">
                  <div className="[text-wrap-mode:nowrap] flex shrink-0 items-center caret-[#5f5f5d] [color-scheme:light] mr-1 mb-px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="rgb(95, 95, 93)"
                      viewBox="0 0 24 24"
                      width="100%"
                      height="100%"
                      className="[text-wrap-mode:nowrap] align-middle w-4 h-4 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
                      data-svg-size="724"
                    >
                      <path
                        fill="rgb(95, 95, 93)"
                        d="M14.25 17.75h-4.5V18a2.25 2.25 0 0 0 4.5 0zm3.5-8.25a5.75 5.75 0 1 0-9.653 4.223c.688.637 1.346 1.496 1.571 2.527h4.664c.225-1.03.883-1.89 1.571-2.527A5.73 5.73 0 0 0 17.75 9.5m1.5 0c0 2.105-.898 4-2.33 5.324-.712.66-1.17 1.414-1.17 2.176v1a3.75 3.75 0 1 1-7.5 0v-1c0-.762-.458-1.516-1.17-2.176A7.25 7.25 0 1 1 19.25 9.5"
                        className="[text-wrap-mode:nowrap] inline fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
                      ></path>
                    </svg>
                  </div>
                  <span className="[text-wrap-mode:nowrap] min-w-0 block caret-[#5f5f5d] [color-scheme:light] pl-1">
                    Thought for 6s
                  </span>
                </div>
              </div>
              <div className="opacity-100 max-w-full relative caret-[#1c1c1c] [color-scheme:light] mt-4">
                <div className="text-zinc-700 leading-[1.75] max-w-full caret-zinc-700 [color-scheme:light]">
                  <p className="leading-[24.96px] caret-zinc-700 [color-scheme:light] my-0">
                    I'll analyze the uploaded HTML to recreate the Allbirds
                    website pixel-perfectly. Let me first read the complete file
                    to understand the full structure.
                  </p>
                </div>
              </div>
              <InputButton1 />
              <InputActions />
              <InputButton3 />
              <InputButton4 />
              <InputButton5 />
              <div className="opacity-100 max-w-full relative caret-[#1c1c1c] [color-scheme:light] mt-4">
                <div className="text-zinc-700 leading-[1.75] max-w-full caret-zinc-700 [color-scheme:light]">
                  <p className="leading-[24.96px] caret-zinc-700 [color-scheme:light] my-0">
                    The Allbirds homepage clone is looking great! The design
                    matches the original with the burgundy banner, elegant serif
                    typography, and the hero section. Let me fix the logo to
                    show the correct "allbirds" text and verify the rest of the
                    page.
                  </p>
                </div>
              </div>
              <InputButton6 />
              <InputButton7 />
              <InputButton8 />
              <CloudActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInputArea;
