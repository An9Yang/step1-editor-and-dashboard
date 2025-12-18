import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditorHeader from '../components/editor/EditorHeader';
import EditorLayout from '../components/editor/EditorLayout';
import EditorAuthModal from '../components/editor/EditorAuthModal';

function EditorPage() {
  const { projectId } = useParams();

  useEffect(() => {
    console.log('[React] Editor DOM rendered for project:', projectId);
  }, [projectId]);

  return (
    <>
      <div className='bg-[#fcfbf8] text-[#1c1c1c] leading-normal [font-family:CameraPlainVariable,"CameraPlainVariable_Fallback",system-ui,sans-serif] h-screen flex flex-col caret-[#1c1c1c] [color-scheme:light] overflow-hidden'>
        <div className="min-h-0 flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
          <div className="h-full flex flex-col caret-[#1c1c1c] [color-scheme:light]">
            <div className="w-full sticky z-50 caret-[#1c1c1c] [color-scheme:light] top-0 bottom-auto inset-x-auto"></div>
            <div className="bg-[#fcfbf8] min-h-0 flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
              <EditorHeader />
              <EditorLayout />
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
              <EditorAuthModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditorPage;
