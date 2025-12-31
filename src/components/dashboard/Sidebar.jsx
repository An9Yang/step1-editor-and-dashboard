import { useState } from 'react';
import WorkspaceSelector from './WorkspaceSelector';
import SidebarNav from './SidebarNav';
import SidebarUserMenu from './SidebarUserMenu';

function Sidebar({ onSettingsClick }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarClick = (e) => {
    // Only expand if clicking on empty space in collapsed state
    if (isCollapsed && e.target === e.currentTarget) {
      setIsCollapsed(false);
    }
  };

  // Icon-only navigation items for collapsed state
  const CollapsedNavIcons = () => (
    <div className="flex flex-col gap-y-1 items-center">
      {/* Workspace icon */}
      <button
        onClick={() => setIsCollapsed(false)}
        className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]"
      >
        <span className="text-[12px] w-6 h-6 flex overflow-hidden shrink-0 items-center rounded-[6px]">
          <span className="bg-[#b8004c] text-white w-full h-full flex justify-center items-center rounded-[6px]">
            H
          </span>
        </span>
      </button>
      {/* Home icon */}
      <a href="/" className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="rgb(28, 28, 28)" d="m18.25 8.939-4.933-3.562a2.25 2.25 0 0 0-2.635 0L5.75 8.94V17A2.25 2.25 0 0 0 8 19.25h8A2.25 2.25 0 0 0 18.25 17zM15 15.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM19.75 17A3.75 3.75 0 0 1 16 20.75H8A3.75 3.75 0 0 1 4.25 17v-6.977l-.81.586a.751.751 0 0 1-.88-1.217L9.805 4.16a3.75 3.75 0 0 1 4.39 0l7.244 5.232a.751.751 0 0 1-.878 1.217l-.811-.586z" />
        </svg>
      </a>
      {/* Search icon */}
      <button className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="rgb(28, 28, 28)" d="M15.25 10a5.25 5.25 0 1 0-10.5 0 5.25 5.25 0 0 0 10.5 0m1.5 0a6.72 6.72 0 0 1-1.477 4.212l5.257 5.258a.75.75 0 1 1-1.06 1.06l-5.258-5.257A6.75 6.75 0 1 1 16.75 10" />
        </svg>
      </button>
      {/* Divider */}
      <div className="w-6 h-px bg-[#eceae4] my-2"></div>
      {/* All projects icon */}
      <a href="/dashboard/projects" className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="rgb(28, 28, 28)" d="M9.25 16c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25zm10 0c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25zM15.056 3.64a2.75 2.75 0 0 1 3.888 0l1.414 1.414a2.75 2.75 0 0 1 0 3.89l-1.414 1.414a2.75 2.75 0 0 1-3.888 0l-1.414-1.415a2.75 2.75 0 0 1 0-3.889zM9.25 6c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25zm8.634-1.298a1.25 1.25 0 0 0-1.768 0l-1.414 1.414a1.25 1.25 0 0 0 0 1.768l1.414 1.414a1.25 1.25 0 0 0 1.768 0l1.414-1.414a1.25 1.25 0 0 0 0-1.768zM10.75 18A2.75 2.75 0 0 1 8 20.75H6A2.75 2.75 0 0 1 3.25 18v-2A2.75 2.75 0 0 1 6 13.25h2A2.75 2.75 0 0 1 10.75 16zm10 0A2.75 2.75 0 0 1 18 20.75h-2A2.75 2.75 0 0 1 13.25 18v-2A2.75 2.75 0 0 1 16 13.25h2A2.75 2.75 0 0 1 20.75 16zm-10-10A2.75 2.75 0 0 1 8 10.75H6A2.75 2.75 0 0 1 3.25 8V6A2.75 2.75 0 0 1 6 3.25h2A2.75 2.75 0 0 1 10.75 6z" />
        </svg>
      </a>
      {/* Starred icon */}
      <a href="/dashboard/starred" className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="rgb(28, 28, 28)" d="M12 2.25a.75.75 0 0 1 .693.462l2.204 5.3 5.722.46a.75.75 0 0 1 .429 1.316l-4.36 3.735 1.332 5.584a.75.75 0 0 1-1.12.814L12 16.929 7.1 19.92a.75.75 0 0 1-1.12-.814l1.332-5.584-4.36-3.735a.75.75 0 0 1 .429-1.316l5.722-.46 2.205-5.3.05-.1A.75.75 0 0 1 12 2.25m-1.688 6.762a.75.75 0 0 1-.632.459l-4.382.351 3.338 2.86c.213.183.307.47.242.744L7.858 17.7l3.752-2.29.092-.048a.75.75 0 0 1 .689.048l3.75 2.29-1.019-4.274a.75.75 0 0 1 .242-.744l3.337-2.86-4.38-.351a.75.75 0 0 1-.632-.46L12 4.953z" />
        </svg>
      </a>
      {/* Shared with me icon */}
      <a href="/dashboard/shared-with-me" className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="rgb(28, 28, 28)" d="M8.5 12.25a.75.75 0 0 1 0 1.5 4.75 4.75 0 0 0-4.27 2.665c-.155.318-.096.602.12.852.237.273.662.483 1.15.483h2a.75.75 0 0 1 0 1.5h-2c-.892 0-1.743-.377-2.284-1.001-.562-.648-.783-1.572-.332-2.494A6.25 6.25 0 0 1 8.5 12.25m8 0a6.25 6.25 0 0 1 5.843 4.026c.307.807.085 1.587-.401 2.132-.472.528-1.188.842-1.942.842h-7c-.754 0-1.47-.314-1.942-.842-.487-.545-.707-1.325-.4-2.132A6.25 6.25 0 0 1 16.5 12.25m0 1.5a4.75 4.75 0 0 0-4.441 3.06.55.55 0 0 0 .118.6c.172.191.473.34.823.34h7c.35 0 .651-.149.823-.34a.55.55 0 0 0 .118-.6 4.75 4.75 0 0 0-4.44-3.06M9.75 8a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m8.5-.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0m-7 .5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0m8.5-.5a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0" />
        </svg>
      </a>
      {/* Divider */}
      <div className="w-6 h-px bg-[#eceae4] my-2"></div>
      {/* Discover icon */}
      <a href="/dashboard/discover" className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="rgb(28, 28, 28)" d="M20.25 12a8.25 8.25 0 1 0-16.5 0 8.25 8.25 0 0 0 16.5 0m-5.398-3.735a.75.75 0 0 1 .883.882l-1 5a.75.75 0 0 1-.587.588l-5 1a.75.75 0 0 1-.883-.883l1-5 .03-.107a.75.75 0 0 1 .558-.48zm-4.215 2.372-.681 3.407 3.406-.682.682-3.406zM21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75" />
        </svg>
      </a>
      {/* Templates icon */}
      <a href="/dashboard/templates" className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="rgb(28, 28, 28)" d="M19.91 8.732q0-.156-.021-.309l-5.991 3.37-.13.08a2.25 2.25 0 0 0-1.018 1.881v6.903q.194-.069.375-.172l5.66-3.269a2.25 2.25 0 0 0 1.125-1.948zm-6.785-5.216a2.25 2.25 0 0 0-2.25 0l-5.66 3.268a2.3 2.3 0 0 0-.413.306l6.096 3.429a2.25 2.25 0 0 0 2.206 0l6.093-3.429a2.3 2.3 0 0 0-.412-.306zM4.09 15.268a2.25 2.25 0 0 0 1.125 1.948l5.66 3.269q.18.104.375.17v-6.9a2.25 2.25 0 0 0-1.132-1.953L4.11 8.422q-.02.153-.02.31zm17.32 0a3.75 3.75 0 0 1-1.875 3.248l-5.66 3.268a3.75 3.75 0 0 1-3.75 0l-5.66-3.268a3.75 3.75 0 0 1-1.875-3.248V8.732a3.75 3.75 0 0 1 1.875-3.247l5.66-3.269a3.75 3.75 0 0 1 3.75 0l5.66 3.269a3.75 3.75 0 0 1 1.875 3.247z" />
        </svg>
      </a>
      {/* Learn icon */}
      <a href="https://docs.lovable.dev/introduction/welcome" className="w-8 h-8 flex justify-center items-center rounded-[8px] hover:bg-[rgba(0,0,0,0.05)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(28, 28, 28)" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="rgb(28, 28, 28)" d="M14 3.25a.75.75 0 0 1 .75.75v3.293a1 1 0 0 1 .087-.025l4.5-1a.75.75 0 0 1 .897.579l2.5 12a.75.75 0 0 1-.552.88l-4 1a.75.75 0 0 1-.91-.545l-2.522-10.09V20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V6A.75.75 0 0 1 4 5.25h3.25V4A.75.75 0 0 1 8 3.25zm-5.25 16h4.5v-2.5h-4.5zm-4 0h2.5V6.75h-2.5zM15.914 8.565l2.63 10.525 2.574-.643-2.198-10.55zM8.75 15.25h4.5v-6.5h-4.5zm0-8h4.5v-2.5h-4.5z" />
        </svg>
      </a>
    </div>
  );

  return (
    <aside
      onClick={handleSidebarClick}
      className={`[--sidebar-width:273px] bg-[rgba(252,251,248,0.95)] ${isCollapsed ? 'w-[60px]' : 'w-[273px]'} h-screen sticky z-30 flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 gap-y-2 gap-x-2 backdrop-blur-[48px] caret-[#1c1c1c] [color-scheme:light] p-3.5 border-[#f7f4ed] border-r inset-x-auto inset-y-0 transition-all duration-300 ${isCollapsed ? 'cursor-pointer' : ''}`}
      data-component-id="Component_2"
    >
      <div
        onClick={handleSidebarClick}
        className="min-h-0 relative z-[1] flex flex-col grow basis-[0%] gap-y-3 gap-x-3 caret-[#1c1c1c] [color-scheme:light]"
      >
        <div className={`w-full flex ${isCollapsed ? 'justify-center' : 'justify-between'} items-center caret-[#1c1c1c] [color-scheme:light]`}>
          <div className="relative caret-[#1c1c1c] [color-scheme:light]">
            <a
              href="/"
              className="w-8 h-8 flex shrink-0 justify-center items-center caret-[#1c1c1c] [color-scheme:light] p-1.5 rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(28, 28, 28)"
                viewBox="0 0 23 24"
                className="align-middle w-5 h-5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
                data-svg-size="1992"
              >
                <mask
                  id="lovable-logo_svg__b"
                  width="23"
                  height="24"
                  x="0"
                  y="0"
                  className="w-[23px] h-6 inline [mask-type:alpha] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
                >
                  <path
                    fill='url("#lovable-logo_svg__a")'
                    fillRule="evenodd"
                    d="M6.898 0c3.81 0 6.898 3.179 6.898 7.1v2.7h2.295c3.81 0 6.898 3.178 6.898 7.1S19.901 24 16.091 24H0V7.1C0 3.18 3.088 0 6.898 0"
                    clipRule="evenodd"
                    className='inline fill-[url("#lovable-logo\_svg\_\_a")] [fill-rule:evenodd] caret-[#1c1c1c] [color-scheme:light]'
                  ></path>
                </mask>
                <g className='inline [mask-image:url("#lovable-logo\_svg\_\_b")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                  <g className='inline [filter:url("#lovable-logo\_svg\_\_c")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                    <ellipse
                      cx="10.084"
                      cy="12.811"
                      fill="rgb(75, 115, 255)"
                      rx="15.562"
                      ry="15.977"
                      className="inline fill-[#4b73ff] caret-[#1c1c1c] [color-scheme:light]"
                    ></ellipse>
                  </g>
                  <g className='inline [filter:url("#lovable-logo\_svg\_\_d")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                    <ellipse
                      cx="11.794"
                      cy="4.043"
                      fill="rgb(255, 102, 244)"
                      rx="19.931"
                      ry="15.977"
                      className="inline fill-[#ff66f4] caret-[#1c1c1c] [color-scheme:light]"
                    ></ellipse>
                  </g>
                  <g className='inline [filter:url("#lovable-logo\_svg\_\_e")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                    <ellipse
                      cx="15.045"
                      cy="1.037"
                      fill="rgb(255, 1, 5)"
                      rx="15.562"
                      ry="14.031"
                      className="inline fill-[#ff0105] caret-[#1c1c1c] [color-scheme:light]"
                    ></ellipse>
                  </g>
                  <g className='inline [filter:url("#lovable-logo\_svg\_\_f")] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]'>
                    <ellipse
                      cx="12.071"
                      cy="4.039"
                      fill="rgb(254, 123, 2)"
                      rx="9.359"
                      ry="9.608"
                      className="inline fill-[#fe7b02] caret-[#1c1c1c] [color-scheme:light]"
                    ></ellipse>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          {!isCollapsed && (
            <div className="caret-[#1c1c1c] [color-scheme:light]">
              <button
                onClick={() => setIsCollapsed(true)}
                className="bg-[rgba(0,0,0,0)] font-[480] text-[14px] [white-space-collapse:collapse] [text-wrap-mode:nowrap] w-8 h-8 inline-flex justify-center items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] [appearance:button] p-0 rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(95, 95, 93)"
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                  className="text-[#5f5f5d] text-center [text-wrap-mode:nowrap] align-middle w-5 h-5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
                  data-svg-size="743"
                >
                  <path
                    fill="rgb(95, 95, 93)"
                    d="M19.25 7A2.25 2.25 0 0 0 17 4.75H7A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17zm-12 9V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0m13.5 1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17V7A3.75 3.75 0 0 1 7 3.25h10A3.75 3.75 0 0 1 20.75 7z"
                    className="[text-wrap-mode:nowrap] inline fill-[#5f5f5d] caret-[#5f5f5d] [color-scheme:light]"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>

        {isCollapsed ? (
          <CollapsedNavIcons />
        ) : (
          <>
            <WorkspaceSelector />
            <SidebarNav />
          </>
        )}

        {/* Bottom fixed section */}
        <div className="mt-auto">
          {!isCollapsed && (
            <button className="bg-[rgba(247,244,237,0.5)] text-[16px] text-left w-full h-14 relative flex overflow-x-hidden overflow-y-hidden justify-between items-center gap-y-3 gap-x-3 caret-[#1c1c1c] [color-scheme:light] [appearance:button] mb-3 p-3 rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] border-[rgba(236,234,228,0.5)] border">
              <div className="flex overflow-x-hidden overflow-y-hidden flex-col justify-between gap-y-1 gap-x-1 caret-[#1c1c1c] [color-scheme:light]">
                <p className="leading-none font-[480] text-[14px] text-ellipsis [white-space-collapse:collapse] [text-wrap-mode:nowrap] overflow-x-hidden overflow-y-hidden caret-[#1c1c1c] [color-scheme:light] my-0">
                  Share Step1
                </p>
                <p className="text-[#5f5f5d] text-[12px] text-ellipsis [white-space-collapse:collapse] [text-wrap-mode:nowrap] overflow-x-hidden overflow-y-hidden caret-[#5f5f5d] [color-scheme:light] my-0">
                  Get 10 credits each
                </p>
              </div>
              <div className="bg-[rgba(247,244,237,0.7)] w-8 h-8 flex shrink-0 justify-center items-center caret-[#1c1c1c] [color-scheme:light] rounded-br-full rounded-t-full rounded-bl-full border-[#eceae4] border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(28, 28, 28)"
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                  className="align-middle w-5 h-5 block overflow-x-hidden overflow-y-hidden shrink-0 fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
                  data-svg-size="1257"
                >
                  <path
                    fill="rgb(28, 28, 28)"
                    d="M19.25 14.75h-6.5v4.5H18c.69 0 1.25-.56 1.25-1.25zM9.118 3.958C7.931 3.257 6.71 3.35 6.03 4.03c-.257.258-.377.548-.382.818-.004.262.1.589.445.934.664.665 2.193 1.345 5.103 1.452-.216-1.574-1.083-2.688-2.078-3.276m8.852.072c-.68-.68-1.901-.773-3.088-.072-.995.588-1.863 1.702-2.08 3.276 2.912-.107 4.44-.787 5.105-1.452.346-.345.449-.672.445-.934-.005-.27-.125-.56-.382-.818M4.75 18c0 .69.56 1.25 1.25 1.25h5.25v-4.5h-6.5zm14.5-8c0-.69-.56-1.25-1.25-1.25h-5.25v4.5h6.5zm-14.5 3.25h6.5v-4.5H6c-.69 0-1.25.56-1.25 1.25zm16 4.75A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18v-8a2.75 2.75 0 0 1 2.313-2.713 4 4 0 0 1-.53-.444c-.593-.592-.896-1.296-.885-2.019.012-.714.33-1.362.822-1.854 1.32-1.32 3.349-1.226 4.912-.303A5.7 5.7 0 0 1 12 4.901a5.7 5.7 0 0 1 2.118-2.234c1.563-.923 3.592-1.017 4.912.303.492.492.81 1.14.822 1.854.01.723-.292 1.427-.884 2.019a4 4 0 0 1-.532.444A2.75 2.75 0 0 1 20.75 10z"
                    className="inline fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
                  ></path>
                </svg>
              </div>
            </button>
          )}
          <SidebarUserMenu isCollapsed={isCollapsed} onSettingsClick={onSettingsClick} />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
