import ViewModeToggle from './ViewModeToggle';

function ToolbarControls({ activeMode, onModeChange }) {
  return (
    <div
      className="[text-wrap-mode:nowrap] flex items-center gap-x-3 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_1_2"
    >
      <ViewModeToggle activeMode={activeMode} onModeChange={onModeChange} />
    </div>
  );
}

export default ToolbarControls;
