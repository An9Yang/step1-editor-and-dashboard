import { useState } from 'react';

function CollapsibleCodeBlock({ language = 'jsx', fileName = '', lineCount = 0, code = '' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayName = fileName || language;
  const previewLines = code.split('\n').slice(0, 3).join('\n');

  return (
    <div className="w-full relative flex flex-col caret-[#1c1c1c] [color-scheme:light] mt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#fcfbf8] font-normal text-[14px] [white-space-collapse:collapse] [text-wrap-mode:nowrap] h-6 absolute z-10 flex justify-center items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] [appearance:button] py-1 px-2 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-[#eceae4] left-auto right-0 top-0 bottom-auto border"
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <div className={`relative overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-[500px]' : 'max-h-6'}`}>
        <div className="h-full flex items-end caret-[#1c1c1c] [color-scheme:light]">
          <div className="text-[#5f5f5d] font-[480] text-[14px] [white-space-collapse:collapse] [text-wrap-mode:nowrap] h-6 flex items-center gap-y-1.5 gap-x-1.5 caret-[#5f5f5d] [color-scheme:light]">
            <div className="flex shrink-0 items-center caret-[#5f5f5d] [color-scheme:light] mb-px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(95, 95, 93)"
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                className="align-middle w-4 h-4 block overflow-hidden shrink-0 fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
              >
                <path
                  fill="rgb(95, 95, 93)"
                  d="M13.272 3.818a.75.75 0 0 1 1.455.364l-4 16a.75.75 0 0 1-1.455-.364zM6.47 7.47a.75.75 0 1 1 1.06 1.06L4.06 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06zm10 0a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L19.94 12l-3.47-3.47a.75.75 0 0 1 0-1.06"
                  className="inline fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
                ></path>
              </svg>
            </div>
            <span className="block shrink-0 caret-[#5f5f5d] [color-scheme:light]">
              {displayName} {lineCount > 0 && `(${lineCount} lines)`}
            </span>
          </div>
        </div>
        {isExpanded && code && (
          <div className="mt-2 bg-[#1c1c1c] rounded-[8px] overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 bg-[#2a2a2a] border-b border-[#3a3a3a]">
              <span className="text-[12px] text-[#9a9a9a] font-mono">{displayName}</span>
              <button
                className="text-[12px] text-[#9a9a9a] hover:text-white flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(code);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                  <path d="M19.25 10c0-.69-.56-1.25-1.25-1.25h-6c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25zm-6-4c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h3.25V10A2.75 2.75 0 0 1 12 7.25h1.25zm1.5 1.25H18A2.75 2.75 0 0 1 20.75 10v8A2.75 2.75 0 0 1 18 20.75h-6A2.75 2.75 0 0 1 9.25 18v-1.25H6A2.75 2.75 0 0 1 3.25 14V6A2.75 2.75 0 0 1 6 3.25h6A2.75 2.75 0 0 1 14.75 6z" />
                </svg>
                Copy
              </button>
            </div>
            <pre className="p-3 text-[13px] text-[#e0e0e0] font-mono overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default CollapsibleCodeBlock;
