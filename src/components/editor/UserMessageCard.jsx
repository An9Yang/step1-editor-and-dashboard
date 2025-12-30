import { useState } from 'react';

/**
 * UserMessageCard - 用户消息卡片
 * 整体右对齐，气泡内容左对齐
 */
function UserMessageCard({
  avatar = '',
  username = '',
  message = '',
  attachments = [], // { name, type }
  onAttachmentClick,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 获取用户名首字母作为默认头像
  const getInitial = () => {
    return username ? username.charAt(0).toUpperCase() : 'U';
  };

  return (
    <div className="w-full flex flex-col items-end">
      {/* 用户信息行：名称 + 头像（右对齐） */}
      <div className="flex items-center gap-x-2 mb-2">
        <span className="text-[14px] font-[480] text-[#5f5f5d]">{username}</span>
        <div className="w-6 h-6 rounded-full overflow-hidden bg-[#1c1c1c] flex items-center justify-center shrink-0">
          {avatar ? (
            <img src={avatar} alt={username} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white text-[11px] font-medium">{getInitial()}</span>
          )}
        </div>
      </div>

      {/* 消息气泡 - 整体右对齐，内容左对齐 */}
      <div className="max-w-[85%] bg-[#f7f4ed] rounded-[16px] rounded-tr-[4px] px-4 py-3 group">
        {/* 附件区域 - 内容左对齐 */}
        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {attachments.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center gap-x-2 px-3 py-2 bg-white/60 border border-[#eceae4] rounded-[10px] cursor-pointer hover:bg-white transition-colors"
                onClick={() => onAttachmentClick && onAttachmentClick(file)}
              >
                {/* 文件图标 */}
                <div className="w-5 h-5 flex items-center justify-center text-[#5f5f5d]">
                  {file.type === 'html' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  ) : file.type === 'image' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  )}
                </div>
                {/* 文件信息 */}
                <div className="min-w-0 max-w-[140px]">
                  <p className="text-[12px] font-[480] text-[#1c1c1c] truncate">{file.name}</p>
                  <p className="text-[11px] text-[#9a9a98] uppercase">{file.type}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 消息文本 - 左对齐 */}
        <p className="text-[14px] text-[#1c1c1c] leading-[1.6] text-left">
          {message}
        </p>

        {/* 复制按钮 - hover显示 */}
        <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleCopy}
            className="p-1 rounded-[6px] text-[#9a9a98] hover:text-[#5f5f5d] hover:bg-[#eceae4] transition-colors"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#16a34a]">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserMessageCard;
