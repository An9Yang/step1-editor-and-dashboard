import { useState, useCallback, useRef, useEffect } from 'react';
import ChatPanel from './ChatPanel';
import PreviewPanel from './PreviewPanel';
import VisualEditorPanel from './VisualEditorPanel';
import FileExplorerPanel from './FileExplorerPanel';
import CodeEditorPanel from './CodeEditorPanel';
import DesignToolsToolbar from './DesignToolsToolbar';
import CanvasOverlay from './CanvasOverlay';

function EditorLayout({ activeMode, onModeChange }) {
  const [leftPanelWidth, setLeftPanelWidth] = useState(30);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTool, setActiveTool] = useState('cursor');
  const containerRef = useRef(null);
  // ... rest of file (should rely on start line)

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    // Limit the width between 20% and 60%
    const clampedWidth = Math.min(Math.max(newWidth, 20), 60);
    setLeftPanelWidth(clampedWidth);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <main
      ref={containerRef}
      className="min-h-0 relative flex grow basis-[0%] isolate caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2"
    >
      <div className="min-h-0 flex grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
        <div className="flex-row w-full h-full min-h-0 relative flex overflow-x-hidden overflow-y-hidden grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
          <div
            id="_r_ai_"
            style={{ width: `${leftPanelWidth}%` }}
            className="shrink-0 bg-[#fcfbf8] h-full min-h-0 relative z-40 flex flex-col overflow-hidden caret-[#1c1c1c] [color-scheme:light] inset-x-auto inset-y-0"
          >
            <div className="w-full min-h-0 flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light] pl-2 overflow-hidden">
              {activeMode === 'design' ? (
                <VisualEditorPanel onBackToChat={() => onModeChange('preview')} />
              ) : (
                <ChatPanel />
              )}
              <div className="shrink-0">
                {/* Only show Preview specific panels here if needed, but PreviewPanel is usually on the right in other designs. 
                    Wait, looking at original code: PreviewPanel seems to be in the LEFT panel at the bottom? 
                    Ah, re-reading original code:
                    line 69: <div className="shrink-0">
                    line 70:   <PreviewPanel />
                    line 71: </div>
                    Wait, PreviewPanel contains the iframe? 
                    Let's re-read line 110: id="preview-panel" ...
                    Line 121 iframe src...
                    
                    The original code had `PreviewPanel` imported on line 3, and used on line 70.
                    BUT, there is also an iframe on line 118-125 inside the RIGHT panel.
                    
                    The `PreviewPanel` component (line 33 of previous `view_file`) contains `PreviewIframe` component.
                    
                    Wait, let's check `PreviewPanel` content again (Step 33).
                    It imports `PreviewIframe`.
                    And `PreviewIframe.jsx` probably contains the iframe.
                    
                    The code I saw in `EditorLayout.jsx` (Step 7) lines 109-130 has a hardcoded iframe!
                    It does NOT seem to use `PreviewPanel` in the right panel.
                    It uses `PreviewPanel` in the LEFT panel (line 70).
                    
                    This is confusing. Let's check `PreviewPanel` usage again.
                    In Step 7:
                    Line 70: <PreviewPanel /> inside the LEFT panel (width controlled by `leftPanelWidth`).
                    
                    Line 109: right panel `id="preview-panel"`. Contains an iframe.
                    
                    If `PreviewPanel` is in the left sidebar, that's weird for an iframe.
                    Let's re-read `PreviewPanel.jsx` (Step 33).
                    It has `PreviewIframe` and `ComponentToolbar`.
                    
                    Let's check `PreviewIframe.jsx`.
                 */}
                {/* Hiding 'PreviewPanel' (which seems to conform to the old 'suggested steps' container?) 
                      The user request says: "Suggested Next Steps" module is in the chart part.
                      And "Design Mode ... fully hide suggested next steps".
                      
                      If `PreviewPanel` corresponds to the bottom of the left sidebar, and contains `ComponentToolbar` (Suggested Steps) and `PreviewIframe`,
                      then hiding it in Design Mode makes sense if we want to hide Suggested Steps.
                      BUT, if it also contains `PreviewIframe`, do we want to hide the iframe?
                      The right panel ALSO has an iframe.
                      
                      Let's assume the Right Panel is the MAIN preview.
                      The Left Panel 'PreviewPanel' might be a mini-preview or a misnomer?
                      
                      Let's simply hide it in 'design' and 'code' modes for now, 
                      or use the `showToolbar` prop if we want to keep `PreviewIframe` but hide toolbar.
                      However, in 'design' mode the left panel is `VisualEditorPanel`.
                      In 'code' mode the left panel is `FileExplorerPanel`.
                      
                      So, we should probably ONLY show `PreviewPanel` (as a bottom component of left sidebar) in `preview` path?
                      OR, does `ChatPanel` take up the full height?
                      Line 66: <ChatPanel />
                      Line 53: flex column.
                      
                      If I look at line 62: `flex-1 min-h-0 overflow-hidden`.
                      This wraps the Chat/VisualEditor.
                      Line 69: `shrink-0`. Wraps `PreviewPanel`.
                      
                      So `PreviewPanel` is ALWAYS at the bottom of the left sidebar.
                      
                      If I am in Design Mode, I want `VisualEditorPanel` to take up the whole space?
                      User request: "Design Mode logic: ... completely hide the Suggested Next Steps module (which belongs to the Chart part)".
                      
                      The `ComponentToolbar` (Suggested Steps) is inside `PreviewPanel`.
                      So in Design Mode, we should NOT render `ComponentToolbar`.
                      Or perhaps we should NOT render `PreviewPanel` at all if it's just that?
                      
                      Let's conditionally render it.
                  */}
                {activeMode !== 'design' && <PreviewPanel showToolbar={true} />}
              </div>
              <div
                role="presentation"
                className="bg-[rgba(252,251,248,0.95)] absolute z-30 flex justify-center items-center opacity-0 caret-[#1c1c1c] [color-scheme:light] pointer-events-none pl-3 inset-0"
              >
                <div className="flex flex-col justify-center items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] pointer-events-none px-20 py-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(28, 28, 28)"
                    viewBox="0 0 24 24"
                    width="100%"
                    height="100%"
                    className="align-middle w-10 h-10 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
                    data-svg-size="795"
                  >
                    <path
                      fill="rgb(28, 28, 28)"
                      d="M20.25 11.75H3.75V16A2.25 2.25 0 0 0 6 18.25h12A2.25 2.25 0 0 0 20.25 16zm1.5 4.25A3.75 3.75 0 0 1 18 19.75H6A3.75 3.75 0 0 1 2.25 16V8A3.75 3.75 0 0 1 6 4.25h1.758a3.75 3.75 0 0 1 2.651 1.099l.242.242c.422.422.995.659 1.591.659H18A3.75 3.75 0 0 1 21.75 10zm-18-5.75h16.5V10A2.25 2.25 0 0 0 18 7.75h-5.758a3.75 3.75 0 0 1-2.651-1.099l-.242-.242a2.25 2.25 0 0 0-1.591-.659H6A2.25 2.25 0 0 0 3.75 8z"
                      className="inline fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
                    ></path>
                  </svg>
                  <h1 className="font-[480] text-[24px] text-center caret-[#1c1c1c] [color-scheme:light] pointer-events-none my-0">
                    Add files
                  </h1>
                  <p className="text-center caret-[#1c1c1c] [color-scheme:light] pointer-events-none my-0">
                    Drop any files here to add them to your message
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            role="separator"
            tabIndex="0"
            onMouseDown={handleMouseDown}
            className={`w-1 hover:w-1.5 bg-transparent hover:bg-[#e0ddd6] relative z-[10000] flex justify-center items-center cursor-col-resize transition-all duration-150 caret-[#1c1c1c] [color-scheme:light] select-none mx-1 my-3 rounded-full ${isDragging ? 'w-1.5 bg-[#d0cdc6]' : ''}`}
          ></div>
          <div
            id="preview-panel"
            style={{ width: `${100 - leftPanelWidth}%` }}
            className="shrink-0 relative flex overflow-x-hidden overflow-y-hidden flex-col caret-[#1c1c1c] [color-scheme:light] pr-2 pb-2"
          >
            <div className="flex overflow-x-hidden overflow-y-hidden flex-col grow caret-[#1c1c1c] [color-scheme:light] rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] border-[#eceae4] border relative">
              {activeMode === 'code' ? (
                <div className="flex h-full w-full">
                  <div className="w-64 shrink-0 h-full">
                    <FileExplorerPanel />
                  </div>
                  <div className="flex-1 h-full min-w-0">
                    <CodeEditorPanel />
                  </div>
                </div>
              ) : (
                <div className="relative flex flex-col grow items-center caret-[#1c1c1c] [color-scheme:light]">
                  {activeMode === 'design' && (
                    <>
                      <DesignToolsToolbar
                        activeTool={activeTool}
                        onToolChange={setActiveTool}
                        onFinish={() => {
                          // Simulate screenshot sync and clean up
                          console.log('Syncing design annotations to Chart...');
                          // Maybe flash a success message? For now just switch to preview/chat to show "result"
                          onModeChange('preview');
                        }}
                      />
                      <CanvasOverlay activeTool={activeTool} />
                    </>
                  )}
                  <div className="w-full h-full flex flex-col justify-center caret-[#1c1c1c] [color-scheme:light]">
                    <div className="w-full h-full relative caret-[#1c1c1c] [color-scheme:light]">
                      <div className="absolute caret-[#1c1c1c] [color-scheme:light] inset-0">
                        <iframe
                          sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-downloads allow-popups"
                          id="static-preview-panel"
                          src="https://id-preview--7165092c-0ecd-4708-b61d-b85f62e702a2.lovable.app/?__lovable_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiR2FEQTZEZGFOdVV5UjZIRFRxQnZHQVFDeWllMiIsInByb2plY3RfaWQiOiI3MTY1MDkyYy0wZWNkLTQ3MDgtYjYxZC1iODVmNjJlNzAyYTIiLCJub25jZSI6IjNiMWJjNjU0OTE5MWQ2MjRkZmQxZjY0MDJkMjQxZTMxIiwiaXNzIjoibG92YWJsZS1hcGkiLCJzdWIiOiI3MTY1MDkyYy0wZWNkLTQ3MDgtYjYxZC1iODVmNjJlNzAyYTIiLCJhdWQiOlsibG92YWJsZS1hcHAiXSwiZXhwIjoxNzY2NTU4NTg3LCJuYmYiOjE3NjU5NTM3ODcsImlhdCI6MTc2NTk1Mzc4N30.qIPzT-Tnt9S0pJMBUkBzDAQSZGyPIxlPiOgeIesQTdw"
                          data-sd-iframe-type="cross-origin"
                          data-sd-iframe-src="https://id-preview--7165092c-0ecd-4708-b61d-b85f62e702a2.lovable.app/?__lovable_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiR2FEQTZEZGFOdVV5UjZIRFRxQnZHQVFDeWllMiIsInByb2plY3RfaWQiOiI3MTY1MDkyYy0wZWNkLTQ3MDgtYjYxZC1iODVmNjJlNzAyYTIiLCJub25jZSI6IjNiMWJjNjU0OTE5MWQ2MjRkZmQxZjY0MDJkMjQxZTMxIiwiaXNzIjoibG92YWJsZS1hcGkiLCJzdWIiOiI3MTY1MDkyYy0wZWNkLTQ3MDgtYjYxZC1iODVmNjJlNzAyYTIiLCJhdWQiOlsibG92YWJsZS1hcHAiXSwiZXhwIjoxNzY2NTU4NTg3LCJuYmYiOjE3NjU5NTM3ODcsImlhdCI6MTc2NTk1Mzc4N30.qIPzT-Tnt9S0pJMBUkBzDAQSZGyPIxlPiOgeIesQTdw"
                          className="align-middle w-full min-h-full overflow-x-clip overflow-y-clip grow caret-[#1c1c1c] [color-scheme:light]"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditorLayout;
