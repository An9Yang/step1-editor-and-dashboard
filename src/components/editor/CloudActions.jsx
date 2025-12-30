import { useState } from 'react';

/**
 * CloudActions - 简化的反馈操作区
 * 面向非技术用户：简洁的反馈按钮
 */
function CloudActions() {
  const [feedback, setFeedback] = useState(null); // 'helpful' | 'not_helpful' | null
  const [copied, setCopied] = useState(false);

  const handleFeedback = (type) => {
    setFeedback(type);
    // TODO: 发送反馈到后端
  };

  const handleCopy = () => {
    setCopied(true);
    // TODO: 复制内容到剪贴板
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-x-1 py-1">
      {/* 反馈按钮组 */}
      <div className="flex items-center gap-x-0.5 bg-[#f7f4ed] rounded-[8px] p-0.5">
        <button
          aria-label="有帮助"
          onClick={() => handleFeedback('helpful')}
          className={`p-1.5 rounded-[6px] transition-colors ${
            feedback === 'helpful'
              ? 'bg-white text-[#16a34a] shadow-sm'
              : 'text-[#5f5f5d] hover:bg-white/50'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        </button>
        <button
          aria-label="没帮助"
          onClick={() => handleFeedback('not_helpful')}
          className={`p-1.5 rounded-[6px] transition-colors ${
            feedback === 'not_helpful'
              ? 'bg-white text-[#dc2626] shadow-sm'
              : 'text-[#5f5f5d] hover:bg-white/50'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
          </svg>
        </button>
      </div>

      {/* 复制按钮 */}
      <button
        aria-label="复制"
        onClick={handleCopy}
        className={`p-1.5 rounded-[6px] transition-colors ${
          copied
            ? 'text-[#16a34a]'
            : 'text-[#5f5f5d] hover:bg-[#f7f4ed]'
        }`}
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        )}
      </button>

      {/* 反馈确认提示 */}
      {feedback && (
        <span className="text-[12px] text-[#9a9a98] ml-2">
          感谢您的反馈
        </span>
      )}
    </div>
  );
}

export default CloudActions;
