import UserMessageCard from './UserMessageCard';
import DateDivider from './DateDivider';

/**
 * ChatMessages - 用户消息容器
 * 用户消息整体右对齐，气泡内容左对齐
 */
function ChatMessages() {
  // 模拟数据
  const userMessage = {
    avatar: 'https://avatars.githubusercontent.com/u/39055087?v=4',
    username: 'smile.xuhc@gmail.com',
    message: '请你参考图片中的html 像素级复原该网站',
    attachments: [
      {
        name: 'Allbirds_cleaned.html',
        type: 'html',
      }
    ],
  };

  const handleAttachmentClick = (file) => {
    console.log('Open attachment:', file);
  };

  return (
    <div className="w-full">
      {/* 日期分隔条 */}
      <DateDivider date="Dec 15, 2024" />

      {/* 用户消息 - 整体右对齐 */}
      <div className="pb-4">
        <UserMessageCard
          avatar={userMessage.avatar}
          username={userMessage.username}
          message={userMessage.message}
          attachments={userMessage.attachments}
          onAttachmentClick={handleAttachmentClick}
        />
      </div>
    </div>
  );
}

export default ChatMessages;
