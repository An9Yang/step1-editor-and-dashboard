import { createPortal } from 'react-dom';

function ComponentPreviewCard({ component, position }) {
  if (!component) return null;

  // Adjust position to stay within viewport
  const adjustedPosition = {
    x: Math.min(position.x, window.innerWidth - 300),
    y: Math.max(8, Math.min(position.y, window.innerHeight - 320)),
  };

  const content = (
    <div
      className="fixed z-[9999] w-[280px] bg-[#fcfbf8] rounded-[14px] shadow-[0_8px_32px_rgba(0,0,0,0.16)] border border-[#eceae4] overflow-hidden pointer-events-none"
      style={{
        left: adjustedPosition.x,
        top: adjustedPosition.y,
        animation: 'fadeSlideDown 150ms ease-out',
      }}
    >
      {/* Preview Image */}
      <div className="aspect-[16/10] overflow-hidden bg-[#eceae4]">
        <img
          src={component.thumbnail}
          alt={component.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-[15px] font-semibold text-[#1c1c1c] leading-tight">
            {component.name}
          </h3>
          <span className="shrink-0 text-[10px] font-medium text-[#9a9a98] bg-[#f7f4ed] px-2 py-0.5 rounded-full">
            {component.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-[12px] text-[#5f5f5d] leading-relaxed mb-3">
          {component.description}
        </p>

        {/* Source */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#eceae4]">
          <div className="w-5 h-5 rounded-md bg-[#eceae4] flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#5f5f5d] uppercase">
              {component.source.charAt(0)}
            </span>
          </div>
          <span className="text-[12px] text-[#5f5f5d]">
            Cloned from <span className="font-medium text-[#1c1c1c]">{component.source}</span>
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-[#5f5f5d] bg-[#f7f4ed] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Click hint */}
        <div className="mt-3 pt-3 border-t border-[#eceae4] flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-3.5 h-3.5 text-[#1e52f1]"
          >
            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          <span className="text-[11px] text-[#1e52f1] font-medium">
            Click to insert reference
          </span>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}

export default ComponentPreviewCard;
