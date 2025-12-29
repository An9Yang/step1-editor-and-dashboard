import { useState } from 'react';
import ShareProjectModal from './ShareProjectModal';

function ActionButtons() {
  const [shareModalOpen, setShareModalOpen] = useState(false);

  return (
    <div
      className="[text-wrap-mode:nowrap] flex items-center caret-[#1c1c1c] [color-scheme:light] group relative"
      data-component-id="Component_1_4_1"
    >
      <a
        href="/@GaDA6DdaNuUyR6HDTqBvGAQCyie2"
        className="[text-wrap-mode:nowrap] block caret-[#1c1c1c] [color-scheme:light]"
      >
        <span className="text-[12px] [text-wrap-mode:nowrap] w-[26px] h-[26px] relative flex overflow-hidden shrink-0 items-center rounded-full border-[#fcfbf8] border">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c"
            className="align-middle w-full h-full max-w-full block object-cover"
          />
        </span>
      </a>
      <button
        type="button"
        onClick={() => setShareModalOpen(true)}
        className="ml-[-8px] bg-[#f7f4ed] font-[480] text-[14px] h-[30px] relative flex shrink-0 justify-center items-center gap-x-1.5 [appearance:button] px-3.5 py-0 rounded-full border-[#fcfbf8] border hover:bg-[#eceae4] transition-colors"
      >
        <span className="text-center flex">Share</span>
      </button>

      {shareModalOpen && (
        <ShareProjectModal onClose={() => setShareModalOpen(false)} />
      )}
    </div>
  );
}

export default ActionButtons;
