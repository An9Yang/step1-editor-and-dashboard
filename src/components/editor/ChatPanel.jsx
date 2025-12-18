import ChatMessages from './ChatMessages';
import ChatInputArea from './ChatInputArea';

function ChatPanel() {
  return (
    <div
      className="min-h-0 flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_1"
    >
      <div className="w-full min-h-0 relative flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
        {/* Messages area - scrollable */}
        <div className="w-full min-h-0 flex-1 overflow-y-auto caret-[#1c1c1c] [color-scheme:light] p-4">
          <ChatMessages />
        </div>
        {/* Input area - fixed at bottom */}
        <div className="w-full shrink-0 caret-[#1c1c1c] [color-scheme:light] p-4 pt-0">
          <ChatInputArea />
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
