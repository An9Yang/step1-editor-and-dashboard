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
        <div className="w-full h-full min-h-0 overflow-y-auto caret-[#1c1c1c] [color-scheme:light] px-5 py-5">
          <div className="space-y-5">
            <div className="flex items-center justify-between px-1 pb-2 border-b border-gray-100">
              <span className="text-xs font-medium text-gray-500">Chat History</span>
              <button className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors" title="Version History">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <ChatMessages />
            <ChatInputArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
