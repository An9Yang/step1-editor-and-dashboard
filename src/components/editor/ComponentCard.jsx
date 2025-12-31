import { useRef } from 'react';

function ComponentCard({ component, onHover, onClick }) {
  const cardRef = useRef(null);
  const isWide = component.layout === 'wide';

  const handleMouseEnter = () => {
    if (cardRef.current && onHover) {
      const rect = cardRef.current.getBoundingClientRect();
      onHover(component, rect);
    }
  };

  const handleMouseLeave = () => {
    if (onHover) {
      onHover(null, null);
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(component);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`group bg-[#f7f4ed] rounded-[10px] overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:bg-white border border-transparent hover:border-[#eceae4] ${isWide ? 'col-span-2' : ''}`}
    >
      {/* Thumbnail - different aspect ratios for wide vs normal */}
      <div className={`relative overflow-hidden bg-[#eceae4] ${isWide ? 'aspect-[16/5]' : 'aspect-[4/3]'}`}>
        <img
          src={component.thumbnail}
          alt={component.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Hover overlay with hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/95 backdrop-blur-sm text-[11px] font-medium text-[#1c1c1c] px-2.5 py-1 rounded-md shadow-sm">
            Click to reference
          </span>
        </div>
      </div>

      {/* Card Content - inline for wide, stacked for normal */}
      <div className={`${isWide ? 'px-3 py-2 flex items-center justify-between' : 'p-3'}`}>
        <div className={isWide ? 'flex items-center gap-3' : ''}>
          {/* Component Name */}
          <h3 className="text-[13px] font-medium text-[#1c1c1c] truncate">
            {component.name}
          </h3>

          {/* Source Badge */}
          <div className={`flex items-center gap-1.5 ${isWide ? '' : 'mt-1'}`}>
            <div className="w-3.5 h-3.5 rounded bg-[#eceae4] flex items-center justify-center shrink-0">
              <span className="text-[8px] font-bold text-[#5f5f5d] uppercase">
                {component.source.charAt(0)}
              </span>
            </div>
            <span className="text-[11px] text-[#9a9a98] truncate">
              {component.source}
            </span>
          </div>
        </div>

        {/* Category tag for wide components */}
        {isWide && (
          <span className="text-[10px] text-[#9a9a98] bg-[#eceae4] px-2 py-0.5 rounded-full shrink-0">
            {component.category}
          </span>
        )}
      </div>
    </div>
  );
}

export default ComponentCard;
