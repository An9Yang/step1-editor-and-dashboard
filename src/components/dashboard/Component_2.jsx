import Component_2_1 from './Component_2_1';
import Component_2_2 from './Component_2_2';
import Component_2_3 from './Component_2_3';

function Component_2() {
  return (
    <aside
      className="[--sidebar-width:273px] bg-[rgba(252,251,248,0.95)] w-[273px] h-[1024px] sticky z-30 flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 gap-y-2 gap-x-2 backdrop-blur-[48px] caret-[#1c1c1c] [color-scheme:light] p-3.5 border-[#f7f4ed] border-r inset-x-auto inset-y-0"
      data-component-id="Component_2"
    >
      <div className="min-h-0 relative z-[1] flex flex-col grow basis-[0%] gap-y-3 gap-x-3 caret-[#1c1c1c] [color-scheme:light] pointer-events-none">
        <div className="w-full flex justify-between items-center caret-[#1c1c1c] [color-scheme:light]">
          <div className="relative caret-[#1c1c1c] [color-scheme:light]">
            <a
              href="/"
              className="w-8 h-8 flex shrink-0 justify-center items-center caret-[#1c1c1c] [color-scheme:light] p-1.5 rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(28, 28, 28)"
                viewBox="0 0 23 24"
                className="align-middle w-5 h-5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
                data-svg-size="1992"
              >
                <mask
                  id="lovable-logo_svg__b"
                  width="23"
                  height="24"
                  x="0"
                  y="0"
                  className="w-[23px] h-6 inline [mask-type:alpha] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
                >
                  <path
                    fill='url("#lovable-logo_svg__a")'
                    fillRule="evenodd"
                    d="M6.898 0c3.81 0 6.898 3.179 6.898 7.1v2.7h2.295c3.81 0 6.898 3.178 6.898 7.1S19.901 24 16.091 24H0V7.1C0 3.18 3.088 0 6.898 0"
                    clipRule="evenodd"
                    className='inline fill-[url("#lovable-logo\_svg\_\_a")] [fill-rule:evenodd] caret-[#1c1c1c] [color-scheme:light]'
                  ></path>
                </mask>
                <g className='inline [mask-image:url("#lovable-logo\_svg\_\_b")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                  <g className='inline [filter:url("#lovable-logo\_svg\_\_c")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                    <ellipse
                      cx="10.084"
                      cy="12.811"
                      fill="rgb(75, 115, 255)"
                      rx="15.562"
                      ry="15.977"
                      className="inline fill-[#4b73ff] caret-[#1c1c1c] [color-scheme:light]"
                    ></ellipse>
                  </g>
                  <g className='inline [filter:url("#lovable-logo\_svg\_\_d")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                    <ellipse
                      cx="11.794"
                      cy="4.043"
                      fill="rgb(255, 102, 244)"
                      rx="19.931"
                      ry="15.977"
                      className="inline fill-[#ff66f4] caret-[#1c1c1c] [color-scheme:light]"
                    ></ellipse>
                  </g>
                  <g className='inline [filter:url("#lovable-logo\_svg\_\_e")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                    <ellipse
                      cx="15.045"
                      cy="1.037"
                      fill="rgb(255, 1, 5)"
                      rx="15.562"
                      ry="14.031"
                      className="inline fill-[#ff0105] caret-[#1c1c1c] [color-scheme:light]"
                    ></ellipse>
                  </g>
                  <g className='inline [filter:url("#lovable-logo\_svg\_\_f")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                    <ellipse
                      cx="12.071"
                      cy="4.039"
                      fill="rgb(254, 123, 2)"
                      rx="9.359"
                      ry="9.608"
                      className="inline fill-[#fe7b02] caret-[#1c1c1c] [color-scheme:light]"
                    ></ellipse>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="caret-[#1c1c1c] [color-scheme:light]">
            <button className="bg-[rgba(0,0,0,0)] font-[480] text-[14px] [white-space-collapse:collapse] [text-wrap-mode:nowrap] w-8 h-8 inline-flex justify-center items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] [appearance:button] p-0 rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(95, 95, 93)"
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                className="text-[#5f5f5d] text-center [text-wrap-mode:nowrap] align-middle w-5 h-5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light] pointer-events-none"
                data-svg-size="743"
              >
                <path
                  fill="rgb(95, 95, 93)"
                  d="M19.25 7A2.25 2.25 0 0 0 17 4.75H7A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17zm-12 9V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0m13.5 1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17V7A3.75 3.75 0 0 1 7 3.25h10A3.75 3.75 0 0 1 20.75 7z"
                  className="[text-wrap-mode:nowrap] inline fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light] pointer-events-none"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Component_2_1 />
        <Component_2_2 />
        <button className="bg-[rgba(247,244,237,0.5)] text-[16px] text-left w-full h-14 relative flex overflow-x-hidden overflow-y-hidden justify-between items-center gap-y-3 gap-x-3 caret-[#1c1c1c] [color-scheme:light] [appearance:button] mt-4 p-3 rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] border-[rgba(236,234,228,0.5)] border">
          <div className="flex overflow-x-hidden overflow-y-hidden flex-col justify-between gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]">
            <p className="leading-none font-[480] text-[14px] text-ellipsis [white-space-collapse:collapse] [text-wrap-mode:nowrap] overflow-x-hidden overflow-y-hidden caret-[#1c1c1c] [color-scheme:light] my-0">
              Share Lovable
            </p>
            <p className="text-[#5f5f5d] text-[12px] text-ellipsis [white-space-collapse:collapse] [text-wrap-mode:nowrap] overflow-x-hidden overflow-y-hidden caret-[#5f5f5d] [color-scheme:light] my-0">
              Get 10 credits each
            </p>
          </div>
          <div className="bg-[rgba(247,244,237,0.7)] w-8 h-8 flex shrink-0 justify-center items-center caret-[#1c1c1c] [color-scheme:light] rounded-br-full rounded-t-full rounded-bl-full border-[#eceae4] border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(28, 28, 28)"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              className="align-middle w-5 h-5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
              data-svg-size="1257"
            >
              <path
                fill="rgb(28, 28, 28)"
                d="M19.25 14.75h-6.5v4.5H18c.69 0 1.25-.56 1.25-1.25zM9.118 3.958C7.931 3.257 6.71 3.35 6.03 4.03c-.257.258-.377.548-.382.818-.004.262.1.589.445.934.664.665 2.193 1.345 5.103 1.452-.216-1.574-1.083-2.688-2.078-3.276m8.852.072c-.68-.68-1.901-.773-3.088-.072-.995.588-1.863 1.702-2.08 3.276 2.912-.107 4.44-.787 5.105-1.452.346-.345.449-.672.445-.934-.005-.27-.125-.56-.382-.818M4.75 18c0 .69.56 1.25 1.25 1.25h5.25v-4.5h-6.5zm14.5-8c0-.69-.56-1.25-1.25-1.25h-5.25v4.5h6.5zm-14.5 3.25h6.5v-4.5H6c-.69 0-1.25.56-1.25 1.25zm16 4.75A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18v-8a2.75 2.75 0 0 1 2.313-2.713 4 4 0 0 1-.53-.444c-.593-.592-.896-1.296-.885-2.019.012-.714.33-1.362.822-1.854 1.32-1.32 3.349-1.226 4.912-.303A5.7 5.7 0 0 1 12 4.901a5.7 5.7 0 0 1 2.118-2.234c1.563-.923 3.592-1.017 4.912.303.492.492.81 1.14.822 1.854.01.723-.292 1.427-.884 2.019a4 4 0 0 1-.532.444A2.75 2.75 0 0 1 20.75 10z"
                className="inline fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
              ></path>
            </svg>
          </div>
        </button>
        <Component_2_3 />
      </div>
    </aside>
  );
}

export default Component_2;
