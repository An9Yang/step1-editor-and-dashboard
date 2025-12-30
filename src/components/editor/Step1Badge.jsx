import { useState } from 'react';

/**
 * Step1Badge - 预览区域右下角的 Step1 徽章
 * 默认显示 "Made with Step1"
 * Hover 时展开显示 Pro 升级选项
 */
function Step1Badge() {
  const [isHovered, setIsHovered] = useState(false);

  const handleUpgrade = () => {
    console.log('Navigate to Pro upgrade');
    // TODO: 跳转到升级页面或打开升级弹窗
  };

  return (
    <div
      className="absolute bottom-4 right-4 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          flex items-center gap-2 px-3 py-2
          bg-[#fcfbf8]/95 backdrop-blur-sm
          rounded-[10px] border border-[#eceae4]
          shadow-[0_2px_12px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-out
          ${isHovered ? 'pr-2' : ''}
        `}
      >
        {/* Step1 Logo */}
        <div className="w-5 h-5 rounded-[6px] bg-gradient-to-br from-[#1e52f1] to-[#6366f1] flex items-center justify-center shrink-0">
          <span className="text-white text-[11px] font-bold">S</span>
        </div>

        {/* Default Text */}
        <span className="text-[12px] text-[#5f5f5d] font-medium whitespace-nowrap">
          Made with Step1
        </span>

        {/* Hover: Upgrade Button */}
        <div
          className={`
            flex items-center overflow-hidden transition-all duration-300 ease-out
            ${isHovered ? 'max-w-[140px] opacity-100 ml-1' : 'max-w-0 opacity-0'}
          `}
        >
          <div className="w-px h-4 bg-[#eceae4] mr-2 shrink-0"></div>
          <button
            onClick={handleUpgrade}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-[#1e52f1] to-[#6366f1] hover:from-[#1640d6] hover:to-[#5558e8] text-white text-[11px] font-medium rounded-[6px] transition-all whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            <span>Hide Badge</span>
            <span className="px-1 py-0.5 bg-white/20 rounded text-[9px] font-semibold">PRO</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1Badge;
