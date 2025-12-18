import ChatPanel from './ChatPanel';
import PreviewPanel from './PreviewPanel';

function EditorLayout() {
  return (
    <main
      className="min-h-0 relative flex grow basis-[0%] isolate caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_2"
    >
      <div className="min-h-0 flex grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
        <div className="flex-row w-full h-full min-h-0 relative flex overflow-x-hidden overflow-y-hidden grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]">
          <div
            id="_r_ai_"
            className="shrink bg-[#fcfbf8] h-full min-h-0 relative z-40 flex flex-col overflow-hidden grow-[30] basis-0 caret-[#1c1c1c] [color-scheme:light] inset-x-auto inset-y-0"
          >
            <div className="w-full min-h-0 flex flex-col grow basis-[0%] caret-[#1c1c1c] [color-scheme:light] pl-2 overflow-hidden">
              <ChatPanel />
              <PreviewPanel />
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
            className="touch-none [-webkit-mask-position-x:0%] [-webkit-mask-position-y:0%] [mask-size:auto] [mask-repeat:repeat] [mask-origin:border-box] [mask-clip:border-box] [mask-composite:add] [mask-mode:match-source] w-0.5 relative z-[10000] flex justify-center items-center [mask-image:linear-gradient(rgba(0,0,0,0)_0%,rgb(255,255,255)_15%,rgb(255,255,255)_80%,rgba(0,0,0,0)_100%)] caret-[#1c1c1c] [color-scheme:light] select-none ml-2 -mr-px mt-3 mb-5 rounded-br-full rounded-t-full rounded-bl-full"
          ></div>
          <div
            id="preview-panel"
            className="shrink relative flex overflow-x-hidden overflow-y-hidden flex-col grow-[70] basis-0 caret-[#1c1c1c] [color-scheme:light] pr-2 pb-2"
          >
            <div className="flex overflow-x-hidden overflow-y-hidden flex-col grow caret-[#1c1c1c] [color-scheme:light] rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] border-[#eceae4] border">
              <div className="relative flex flex-col grow items-center caret-[#1c1c1c] [color-scheme:light]">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditorLayout;
