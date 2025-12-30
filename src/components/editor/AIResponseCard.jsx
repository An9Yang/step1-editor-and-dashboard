import { useState } from 'react';

/**
 * AIResponseCard - 简洁的AI响应状态卡片
 * 面向非技术用户：隐藏技术细节，只展示关键信息
 */
function AIResponseCard({
  status = 'completed', // 'completed' | 'in_progress' | 'error'
  title = '已完成更新',
  summary = '',
  filesChanged = [],
  onFileClick,
  technicalDetails = null,
  timestamp = '',
}) {
  const [showFiles, setShowFiles] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const statusConfig = {
    completed: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
      color: 'text-[#16a34a]',
      bgColor: 'bg-[#dcfce7]',
    },
    in_progress: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 animate-spin">
          <path d="M21 12a9 9 0 11-6.219-8.56"></path>
        </svg>
      ),
      color: 'text-[#1e52f1]',
      bgColor: 'bg-[#e8f0fe]',
    },
    error: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      ),
      color: 'text-[#dc2626]',
      bgColor: 'bg-[#fef2f2]',
    }
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="w-full">
      {/* AI 头像和标识 */}
      <div className="flex items-center gap-x-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <span className="text-[14px] font-[480] text-[#5f5f5d]">Step1 AI</span>
        {timestamp && (
          <span className="text-[12px] text-[#9a9a98]">{timestamp}</span>
        )}
      </div>

      {/* 响应内容气泡 */}
      <div className="max-w-[85%] bg-[#f7f4ed] rounded-[16px] rounded-tl-[4px] px-4 py-3.5">
        {/* 状态标题行 */}
        <div className="flex items-center gap-x-2">
          <div className={`w-5 h-5 rounded-full ${currentStatus.bgColor} ${currentStatus.color} flex items-center justify-center`}>
            {currentStatus.icon}
          </div>
          <span className="text-[14px] font-[480] text-[#1c1c1c]">{title}</span>
        </div>

        {/* 描述内容 */}
        {summary && (
          <p className="text-[14px] text-[#5f5f5d] leading-[1.6] mt-2.5">
            {summary}
          </p>
        )}

        {/* 文件变更 - 折叠展示 */}
        {filesChanged.length > 0 && (
          <div className="mt-3 pt-3 border-t border-[#eceae4]">
            <button
              onClick={() => setShowFiles(!showFiles)}
              className="flex items-center gap-x-1.5 text-[13px] text-[#5f5f5d] hover:text-[#1c1c1c] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>{filesChanged.length} 个文件已更新</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-3 h-3 transition-transform ${showFiles ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>

            {showFiles && (
              <div className="mt-2 space-y-1">
                {filesChanged.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-x-2 text-[13px] text-[#5f5f5d] py-1.5 px-2 bg-white/60 rounded-[6px] cursor-pointer hover:bg-white transition-colors"
                    onClick={() => onFileClick && onFileClick(file)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-[#5f5f5d]">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <span className="font-mono text-[12px]">{file.name || file}</span>
                    {file.changes && (
                      <span className="text-[11px] text-[#9a9a98] ml-auto">+{file.changes}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 技术详情 - 默认折叠 */}
        {technicalDetails && (
          <div className="mt-3 pt-3 border-t border-[#eceae4]">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-x-1.5 text-[12px] text-[#9a9a98] hover:text-[#5f5f5d] transition-colors"
            >
              <span>查看详情</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-3 h-3 transition-transform ${showDetails ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>

            {showDetails && (
              <div className="mt-2 text-[13px] text-[#5f5f5d] leading-[1.6]">
                {technicalDetails}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIResponseCard;
