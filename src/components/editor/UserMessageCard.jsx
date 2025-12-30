import MessageActions from './MessageActions';

/**
 * UserMessageCard - 用户消息卡片
 * 整体右对齐，气泡内容左对齐，操作按钮在气泡外部
 */
function UserMessageCard({
  avatar = '',
  username = '',
  message = '',
  attachments = [], // { name, type }
  onAttachmentClick,
}) {
  // 获取用户名首字母作为默认头像
  const getInitial = () => {
    return username ? username.charAt(0).toUpperCase() : 'U';
  };

  return (
    <div className="w-full flex flex-col items-end group">
      {/* 用户信息行：名称 + 头像 */}
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

      {/* 消息气泡 */}
      <div className="max-w-[85%] bg-[#f7f4ed] rounded-[16px] rounded-tr-[4px] px-4 py-3">
        {/* 附件区域 */}
        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {attachments.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center gap-x-2 px-3 py-2 bg-white/60 border border-[#eceae4] rounded-[10px] cursor-pointer hover:bg-white transition-colors"
                onClick={() => onAttachmentClick && onAttachmentClick(file)}
              >
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
                <div className="min-w-0 max-w-[140px]">
                  <p className="text-[12px] font-[480] text-[#1c1c1c] truncate">{file.name}</p>
                  <p className="text-[11px] text-[#9a9a98] uppercase">{file.type}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 消息文本 */}
        <p className="text-[14px] text-[#1c1c1c] leading-[1.6] text-left">
          {message}
        </p>
      </div>

      {/* 操作按钮 - 气泡外部，hover显示 */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <MessageActions align="right" content={message} />
      </div>
    </div>
  );
}

export default UserMessageCard;
