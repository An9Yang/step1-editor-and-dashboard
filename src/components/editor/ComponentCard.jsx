import { useRef } from 'react';

function ComponentCard({ component, onHover, onClick }) {
  const cardRef = useRef(null);

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
      className="group bg-[#f7f4ed] rounded-[12px] overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:bg-white border border-transparent hover:border-[#eceae4]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eceae4]">
        <img
          src={component.thumbnail}
          alt={component.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay with hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/90 backdrop-blur-sm text-[11px] font-medium text-[#1c1c1c] px-2 py-1 rounded-md shadow-sm">
            Click to reference
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3">
        {/* Component Name */}
        <h3 className="text-[13px] font-medium text-[#1c1c1c] truncate mb-1">
          {component.name}
        </h3>

        {/* Source Badge */}
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded bg-[#eceae4] flex items-center justify-center">
            <span className="text-[8px] font-bold text-[#5f5f5d] uppercase">
              {component.source.charAt(0)}
            </span>
          </div>
          <span className="text-[11px] text-[#9a9a98] truncate">
            {component.source}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;
