import ChatMessages from './ChatMessages';
import ChatInputArea from './ChatInputArea';

function ChatPanel() {
  return (
    <div
      className="h-full min-h-0 flex flex-col caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2_1"
    >
      <div className="w-full h-full min-h-0 relative flex flex-col caret-[#1c1c1c] [color-scheme:light]">
        {/* Chat content area - scrollable */}
        <div className="w-full h-full min-h-0 overflow-y-auto caret-[#1c1c1c] [color-scheme:light] px-4 py-6">
          <div className="space-y-6">
            <ChatMessages />
            <ChatInputArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
