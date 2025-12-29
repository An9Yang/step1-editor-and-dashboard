import { useState, useCallback, useRef, useEffect } from 'react';
import ChatPanel from './ChatPanel';
import PreviewPanel from './PreviewPanel';
import VisualEditorPanel from './VisualEditorPanel';
import FileExplorerPanel from './FileExplorerPanel';
import CodeEditorPanel from './CodeEditorPanel';
import DesignToolsToolbar from './DesignToolsToolbar';
import CanvasOverlay from './CanvasOverlay';

function EditorLayout({ activeMode, onModeChange, historyOpen }) {
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
                <ChatPanel historyOpen={historyOpen} />
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
            className="flex-1 min-w-0 relative flex overflow-x-hidden overflow-y-hidden flex-col caret-[#1c1c1c] [color-scheme:light] pr-2 pb-2"
          >
            <div className="flex overflow-x-hidden overflow-y-hidden flex-col grow caret-[#1c1c1c] [color-scheme:light] rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] border-[#eceae4] border relative">
              {activeMode === 'code' ? (
                <div className="absolute inset-0 flex">
                  <div className="w-64 shrink-0 h-full overflow-hidden">
                    <FileExplorerPanel />
                  </div>
                  <div className="flex-1 h-full min-w-0 overflow-hidden">
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
                          srcDoc={`<!DOCTYPE html>
<html>
  <head>
    <base target="_self">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Inter', sans-serif; }
    </style>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        // Prevent all links from navigating outside the iframe
        document.addEventListener('click', function(e) {
          const link = e.target.closest('a');
          if (link) {
            const href = link.getAttribute('href');
            // Prevent navigation for # links or external links
            if (href === '#' || href.startsWith('http') || href.startsWith('//')) {
              e.preventDefault();
              // For anchor links, scroll to the element if it exists
              if (href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
        });
        // Prevent form submissions from navigating
        document.addEventListener('submit', function(e) {
          e.preventDefault();
        });
      });
    </script>
  </head>
  <body class="bg-white">
    <!-- Header Component -->
    <header class="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span class="font-semibold text-xl tracking-tight text-gray-900">Platform</span>
          </div>
          <nav class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-500 hover:text-gray-900 font-medium font-sm">Products</a>
            <a href="#" class="text-gray-500 hover:text-gray-900 font-medium font-sm">Solutions</a>
            <a href="#" class="text-gray-500 hover:text-gray-900 font-medium font-sm">Resources</a>
            <a href="#" class="bg-black text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition">Log in</a>
          </nav>
        </div>
      </div>
    </header>
    
    <!-- Hero Component -->
    <main>
      <div class="relative pt-20 pb-32">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Welcome to our platform
          </h1>
          <p class="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Build amazing things with us.
          </p>
          <div class="flex justify-center gap-4">
            <button class="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm">
              Get Started
            </button>
            <button class="bg-white text-gray-700 border border-gray-200 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition">
              View Documentation
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition duration-300">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Fast Performance</h3>
            <p class="text-sm text-gray-500">Optimized for speed and reliability across all devices.</p>
          </div>
          <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition duration-300">
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Customizable</h3>
            <p class="text-sm text-gray-500">Flexible components that adapt to your brand identity.</p>
          </div>
          <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition duration-300">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Secure by Default</h3>
            <p class="text-sm text-gray-500">Enterprise-grade security protecting your data.</p>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>`}
                          data-sd-iframe-type="same-origin"
                          data-sd-iframe-src="about:blank"
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
