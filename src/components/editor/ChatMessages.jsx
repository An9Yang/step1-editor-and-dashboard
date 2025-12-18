import MessageBubble from './MessageBubble';
import MessageContent from './MessageContent';

function ChatMessages() {
  return (
    <div
      className="w-full caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_1_1"
    >
      <div
        id="umsg_01kcfzngbyf26s6xx256bs76f1"
        className="min-h-[auto] w-full max-w-screen-md flex flex-col caret-[#1c1c1c] [color-scheme:light] mx-auto pb-2 group"
      >
        <div className="caret-[#1c1c1c] [color-scheme:light]">
          <MessageBubble />
          <MessageContent />
        </div>
      </div>
    </div>
  );
}

export default ChatMessages;
