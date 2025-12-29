import { useState } from 'react';

function SettingsModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('project-settings');
  const [hideBadge, setHideBadge] = useState(false);
  const [disableAnalytics, setDisableAnalytics] = useState(false);

  // Mock project data
  const projectData = {
    displayName: 'Pixel Perfect Pixels',
    subdomain: 'pixel-perfect-pixels',
    owner: 'HaoCheng',
    createdAt: 'Dec 15, 2024',
    messagesCount: 42,
    aiEditsCount: 128,
    visibility: 'Private',
    category: 'Web Application'
  };

  if (!isOpen) return null;

  const sidebarItems = [
    {
      category: 'Project',
      items: [
        { id: 'project-settings', label: 'Project settings', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        )},
        { id: 'domains', label: 'Domains', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        )},
        { id: 'knowledge', label: 'Knowledge', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        )}
      ]
    },
    {
      category: 'Workspace',
      items: [
        { id: 'workspace', label: "HaoCheng's Lovable", icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        )},
        { id: 'people', label: 'People', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )},
        { id: 'plans', label: 'Plans & credits', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
        )},
        { id: 'cloud', label: 'Cloud & AI balance', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        )},
        { id: 'privacy', label: 'Privacy & security', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        )}
      ]
    },
    {
      category: 'Account',
      items: [
        { id: 'account', label: 'Your account', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        )},
        { id: 'labs', label: 'Labs', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M9 3h6v4l4 8H5l4-8V3z"></path>
            <path d="M10 3v4"></path>
            <path d="M14 3v4"></path>
            <path d="M5 15h14"></path>
            <path d="M7 19h10"></path>
            <path d="M9 21h6"></path>
          </svg>
        )}
      ]
    },
    {
      category: 'Connectors',
      items: [
        { id: 'connectors', label: 'Connectors', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        )},
        { id: 'github', label: 'GitHub', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )}
      ]
    }
  ];

  // Render Project Settings content
  const renderProjectSettings = () => (
    <div className="space-y-6">
      {/* Overview Section */}
      <div>
        <h3 className="text-[13px] font-medium text-[#5f5f5d] mb-4">Overview</h3>
        <div className="space-y-4">
          {/* Display name */}
          <div className="flex items-center justify-between py-2 border-b border-[#eceae4]">
            <span className="text-[14px] text-[#5f5f5d]">Display name</span>
            <span className="text-[14px] text-[#1c1c1c] font-medium">{projectData.displayName}</span>
          </div>
          {/* URL subdomain */}
          <div className="flex items-center justify-between py-2 border-b border-[#eceae4]">
            <span className="text-[14px] text-[#5f5f5d]">URL subdomain</span>
            <span className="text-[14px] text-[#1c1c1c] font-medium">{projectData.subdomain}</span>
          </div>
          {/* Owner */}
          <div className="flex items-center justify-between py-2 border-b border-[#eceae4]">
            <span className="text-[14px] text-[#5f5f5d]">Owner</span>
            <span className="text-[14px] text-[#1c1c1c] font-medium">{projectData.owner}</span>
          </div>
          {/* Created at */}
          <div className="flex items-center justify-between py-2 border-b border-[#eceae4]">
            <span className="text-[14px] text-[#5f5f5d]">Created at</span>
            <span className="text-[14px] text-[#1c1c1c] font-medium">{projectData.createdAt}</span>
          </div>
          {/* Messages count */}
          <div className="flex items-center justify-between py-2 border-b border-[#eceae4]">
            <span className="text-[14px] text-[#5f5f5d]">Messages count</span>
            <span className="text-[14px] text-[#1c1c1c] font-medium">{projectData.messagesCount}</span>
          </div>
          {/* AI edits count */}
          <div className="flex items-center justify-between py-2 border-b border-[#eceae4]">
            <span className="text-[14px] text-[#5f5f5d]">AI edits count</span>
            <span className="text-[14px] text-[#1c1c1c] font-medium">{projectData.aiEditsCount}</span>
          </div>
        </div>
      </div>

      {/* Project visibility */}
      <div className="flex items-center justify-between py-3 border-b border-[#eceae4]">
        <div>
          <span className="text-[14px] text-[#1c1c1c] font-medium block">Project visibility</span>
          <span className="text-[13px] text-[#5f5f5d]">Control who can view and access this project</span>
        </div>
        <button className="px-3 py-1.5 text-[13px] bg-[#f7f4ed] hover:bg-[#eceae4] rounded-lg transition-colors">
          {projectData.visibility}
        </button>
      </div>

      {/* Project category */}
      <div className="flex items-center justify-between py-3 border-b border-[#eceae4]">
        <div>
          <span className="text-[14px] text-[#1c1c1c] font-medium block">Project category</span>
          <span className="text-[13px] text-[#5f5f5d]">Categorize your project for better organization</span>
        </div>
        <button className="px-3 py-1.5 text-[13px] bg-[#f7f4ed] hover:bg-[#eceae4] rounded-lg transition-colors">
          {projectData.category}
        </button>
      </div>

      {/* Hide Lovable badge */}
      <div className="flex items-center justify-between py-3 border-b border-[#eceae4]">
        <div>
          <span className="text-[14px] text-[#1c1c1c] font-medium block">Hide Lovable badge</span>
          <span className="text-[13px] text-[#5f5f5d]">Remove the "Made with Lovable" badge from your app</span>
        </div>
        <button
          onClick={() => setHideBadge(!hideBadge)}
          className={`relative w-11 h-6 rounded-full transition-colors ${hideBadge ? 'bg-[#1e52f1]' : 'bg-[#d1d5db]'}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${hideBadge ? 'translate-x-5' : ''}`}></span>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        {/* Rename project */}
        <button className="w-full flex items-center justify-between px-4 py-3 bg-[#f7f4ed] hover:bg-[#eceae4] rounded-lg transition-colors">
          <div className="flex items-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span className="text-[14px] text-[#1c1c1c]">Rename project</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#9a9a98]">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>

        {/* Remix project */}
        <button className="w-full flex items-center justify-between px-4 py-3 bg-[#f7f4ed] hover:bg-[#eceae4] rounded-lg transition-colors">
          <div className="flex items-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
              <path d="M17 1l4 4-4 4"></path>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <path d="M7 23l-4-4 4-4"></path>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
            <span className="text-[14px] text-[#1c1c1c]">Remix project</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#9a9a98]">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>

        {/* Transfer */}
        <button className="w-full flex items-center justify-between px-4 py-3 bg-[#f7f4ed] hover:bg-[#eceae4] rounded-lg transition-colors">
          <div className="flex items-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
              <path d="M16 3h5v5"></path>
              <path d="M4 20L21 3"></path>
              <path d="M21 16v5h-5"></path>
              <path d="M15 15l6 6"></path>
              <path d="M4 4l5 5"></path>
            </svg>
            <span className="text-[14px] text-[#1c1c1c]">Transfer</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#9a9a98]">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
      </div>

      {/* Disable analytics */}
      <div className="flex items-center justify-between py-3 border-b border-[#eceae4]">
        <div>
          <span className="text-[14px] text-[#1c1c1c] font-medium block">Disable analytics</span>
          <span className="text-[13px] text-[#5f5f5d]">Stop collecting analytics data for this project</span>
        </div>
        <button
          onClick={() => setDisableAnalytics(!disableAnalytics)}
          className={`relative w-11 h-6 rounded-full transition-colors ${disableAnalytics ? 'bg-[#1e52f1]' : 'bg-[#d1d5db]'}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${disableAnalytics ? 'translate-x-5' : ''}`}></span>
        </button>
      </div>

      {/* Danger Zone */}
      <div className="space-y-3 pt-4">
        {/* Unpublish project */}
        <button className="w-full flex items-center justify-between px-4 py-3 bg-[#f7f4ed] hover:bg-[#eceae4] rounded-lg transition-colors border border-[#eceae4]">
          <div className="flex items-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
              <line x1="12" y1="2" x2="12" y2="12"></line>
            </svg>
            <span className="text-[14px] text-[#1c1c1c]">Unpublish project</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#9a9a98]">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>

        {/* Delete project */}
        <button className="w-full flex items-center justify-between px-4 py-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200">
          <div className="flex items-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-red-500">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <span className="text-[14px] text-red-600 font-medium">Delete project</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-red-400">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );

  // Render placeholder for other tabs
  const renderPlaceholder = (tabName) => (
    <div className="flex items-center justify-center h-64 text-[#5f5f5d]">
      <p className="text-[14px]">{tabName} settings coming soon...</p>
    </div>
  );

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'project-settings':
        return renderProjectSettings();
      case 'domains':
        return renderPlaceholder('Domains');
      case 'knowledge':
        return renderPlaceholder('Knowledge');
      case 'workspace':
        return renderPlaceholder('Workspace');
      case 'people':
        return renderPlaceholder('People');
      case 'plans':
        return renderPlaceholder('Plans & credits');
      case 'cloud':
        return renderPlaceholder('Cloud & AI balance');
      case 'privacy':
        return renderPlaceholder('Privacy & security');
      case 'account':
        return renderPlaceholder('Your account');
      case 'labs':
        return renderPlaceholder('Labs');
      case 'connectors':
        return renderPlaceholder('Connectors');
      case 'github':
        return renderPlaceholder('GitHub');
      default:
        return renderProjectSettings();
    }
  };

  // Get active tab label
  const getActiveTabLabel = () => {
    for (const section of sidebarItems) {
      const item = section.items.find(i => i.id === activeTab);
      if (item) return item.label;
    }
    return 'Settings';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#fcfbf8] rounded-xl shadow-2xl w-[900px] max-w-[95vw] h-[600px] max-h-[90vh] flex overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Left Sidebar */}
        <div className="w-[240px] border-r border-[#eceae4] flex flex-col bg-[#f9f8f5]">
          {/* Header */}
          <div className="px-4 py-4 border-b border-[#eceae4]">
            <h2 className="text-[16px] font-semibold text-[#1c1c1c]">Settings</h2>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-2">
            {sidebarItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-4">
                <p className="px-4 py-1 text-[11px] font-medium text-[#9a9a98] uppercase tracking-wider">
                  {section.category}
                </p>
                <div className="mt-1">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left px-4 py-2 flex items-center gap-x-2.5 transition-colors ${
                        activeTab === item.id
                          ? 'bg-[#e8eeff] text-[#1e52f1]'
                          : 'text-[#1c1c1c] hover:bg-[#f7f4ed]'
                      }`}
                    >
                      <span className={activeTab === item.id ? 'text-[#1e52f1]' : 'text-[#5f5f5d]'}>
                        {item.icon}
                      </span>
                      <span className="text-[13px] font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col">
          {/* Content Header */}
          <div className="px-6 py-4 border-b border-[#eceae4] flex items-center justify-between">
            <h3 className="text-[16px] font-semibold text-[#1c1c1c]">{getActiveTabLabel()}</h3>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-[#f7f4ed] rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#5f5f5d]">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
