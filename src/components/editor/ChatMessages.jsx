import MessageBubble from './MessageBubble';
import MessageContent from './MessageContent';

function ChatMessages() {
  return (
    <div
      className="w-full caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_1_1"
    >
      {/* User message - aligned right */}
      <div
        id="umsg_01kcfzngbyf26s6xx256bs76f1"
        className="min-h-[auto] w-full flex flex-col items-end caret-[#1c1c1c] [color-scheme:light] pb-4 group"
      >
        <div className="max-w-[80%] space-y-2 caret-[#1c1c1c] [color-scheme:light]">
          <MessageBubble />
          <MessageContent />
        </div>
      </div>
    </div>
  );
}

export default ChatMessages;
