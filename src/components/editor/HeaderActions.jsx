import { useState } from 'react';
import ActionButtons from './ActionButtons';
import PublishModal from './PublishModal';

function HeaderActions() {
  const [showPublishModal, setShowPublishModal] = useState(false);

  return (
    <div
      className="[text-wrap-mode:nowrap] flex items-center gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_1_4"
    >
      <div className="[text-wrap-mode:nowrap] relative z-[1000] flex items-center gap-y-1.5 gap-x-1.5 caret-[#1c1c1c] [color-scheme:light]">
        <ActionButtons />
        <button
          id="export-button"
          type="button"
          className="bg-[#f7f4ed] font-[480] text-[14px] [text-wrap-mode:nowrap] h-7 flex justify-center items-center gap-x-1.5 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-[#1c1c1c] [color-scheme:light] [appearance:button] px-2.5 py-1 rounded-[6px]"
        >
          <span className="text-center">Export</span>
        </button>

        <div className="relative">
          <button
            id="publish-menu"
            type="button"
            onClick={() => setShowPublishModal(!showPublishModal)}
            className="bg-[#1e52f1] text-[#f0f6ff] font-[480] text-[14px] [text-wrap-mode:nowrap] h-7 flex justify-center items-center gap-y-1.5 gap-x-1.5 caret-[#f0f6ff] [color-scheme:light] [appearance:button] px-3 py-2 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px]"
          >
            <span className="text-center [text-wrap-mode:nowrap] flex caret-[#f0f6ff] [color-scheme:light]">
              Publish
            </span>
          </button>
          {showPublishModal && (
            <PublishModal onClose={() => setShowPublishModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderActions;
