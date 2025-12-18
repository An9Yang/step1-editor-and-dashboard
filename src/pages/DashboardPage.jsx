import React, { useEffect } from 'react';
import MobileHeader from '../components/dashboard/MobileHeader';
import Sidebar from '../components/dashboard/Sidebar';
import MainContent from '../components/dashboard/MainContent';
import AuthModal from '../components/dashboard/AuthModal';

function DashboardPage() {
  useEffect(() => {
    console.log('[React] Dashboard DOM rendered');
  }, []);

  return (
    <>
      <div className='bg-[#fcfbf8] text-[#1c1c1c] leading-normal [font-family:CameraPlainVariable,"CameraPlainVariable_Fallback",system-ui,sans-serif] h-screen flex flex-col caret-[#1c1c1c] [color-scheme:light] overflow-hidden'>
        <div className="min-h-0 flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
          <div className="bg-[#fcfbf8] caret-[#1c1c1c] [color-scheme:light]">
            <div className="h-full relative flex flex-col caret-[#1c1c1c] [color-scheme:light]">
              <div className="min-h-0 flex grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
                <MobileHeader />
                <Sidebar />
                <MainContent />
              </div>
            </div>
          </div>
          <section
            aria-label="Notifications alt+T"
            tabIndex="-1"
            className="caret-[#1c1c1c] [color-scheme:light]"
          ></section>
        </div>
        <div
          data-was-iframe="true"
          data-sd-iframe-type="same-origin"
          className="align-middle w-0 h-0 hidden overflow-x-clip overflow-y-clip invisible caret-[#1c1c1c] [color-scheme:light]"
        >
          <div className="bg-white [font-family:Times,system-ui,sans-serif] m-2"></div>
        </div>
        <div
          data-was-iframe="true"
          data-sd-iframe-type="same-origin"
          data-sd-iframe-src="about:blank"
          className="align-middle w-full h-full fixed z-[99] hidden overflow-x-clip overflow-y-clip caret-[#1c1c1c] [color-scheme:light] left-0 right-auto top-0 bottom-auto"
        >
          <div className="bg-white [font-family:Times,system-ui,sans-serif] m-2">
            <div>
              <div
                role="dialog"
                aria-hidden="true"
                className='leading-normal [font-family:-apple-system,"system-ui","Segoe_UI",Roboto,Helvetica,Arial,sans-serif,"Apple_Color_Emoji","Segoe_UI_Emoji","Segoe_UI_Symbol",system-ui,sans-serif] text-[14px] w-full min-h-full absolute z-[99999] flex overflow-x-hidden flex-col items-center left-0 right-auto top-0 bottom-auto'
              >
                <AuthModal />
                <a
                  href="https://www.netlify.com"
                  className="text-[#a3a9ac] font-medium text-center [white-space-collapse:collapse] [text-wrap-mode:nowrap] w-px h-px absolute block overflow-x-hidden overflow-y-hidden caret-[#a3a9ac] -m-px"
                >
                  <span
                    className="[text-wrap-mode:nowrap] w-8 h-8 block caret-[#a3a9ac] mt-auto mb-2 mx-auto"
                    data-style-id="style-3-1765940093753"
                  ></span>
                  Coded by Netlify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
