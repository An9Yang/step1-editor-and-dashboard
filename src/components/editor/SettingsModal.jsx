import { useState } from 'react';

function SettingsModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('project-settings');
  const [hideBadge, setHideBadge] = useState(false);
  const [disableAnalytics, setDisableAnalytics] = useState(false);
  const [projectVisibility, setProjectVisibility] = useState('Public');
  const [visibilityDropdownOpen, setVisibilityDropdownOpen] = useState(false);

  // Secrets state
  const [secrets, setSecrets] = useState([]);
  const [newSecrets, setNewSecrets] = useState([{ key: '', value: '' }]);

  // Plans state - annual billing toggle for each plan
  const [annualBilling, setAnnualBilling] = useState({ pro: true, builder: true, starter: true });

  // Mock project data
  const projectData = {
    displayName: 'Pixel Perfect Pixels',
    subdomain: 'pixel-perfect-pixels',
    owner: 'HaoCheng',
    createdAt: 'Dec 15, 2024',
    messagesCount: 42,
    aiEditsCount: 128,
    visibility: 'Public',
    category: 'Web Application'
  };

  // Mock user data
  const userData = {
    username: 'User_Snw8z',
    email: 'y794847929@gmail.com',
    avatarColor: 'bg-gradient-to-br from-purple-500 to-purple-600'
  };

  // Mock usage data
  const usageData = {
    creditsUsed: 34,
    creditsTotal: 50,
    projectsUsed: 104,
    projectsTotal: 5,
    nextRenewal: '1/7/2026'
  };

  if (!isOpen) return null;

  const sidebarItems = [
    {
      category: 'Project',
      items: [
        { id: 'project-settings', label: 'Project Settings', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        )},
        { id: 'secrets', label: 'Secrets', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        )},
        { id: 'integrations', label: 'Integrations', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <rect x="2" y="2" width="8" height="8" rx="2"></rect>
            <rect x="14" y="2" width="8" height="8" rx="2"></rect>
            <rect x="2" y="14" width="8" height="8" rx="2"></rect>
            <rect x="14" y="14" width="8" height="8" rx="2"></rect>
          </svg>
        )},
        { id: 'plans', label: 'Plans & Usage', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        )},
        { id: 'account', label: 'Account', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        )}
      ]
    },
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

  // Render Domains content
  const renderDomains = () => (
    <div className="space-y-6">
      {/* Header with link */}
      <div className="flex items-center justify-between">
        <p className="text-[14px] text-[#5f5f5d]">Publish your project to custom domains.</p>
        <button className="flex items-center gap-x-1.5 px-3 py-1.5 text-[13px] text-[#1c1c1c] border border-[#eceae4] rounded-lg hover:bg-[#f7f4ed] transition-colors">
          <span>How domains work</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M7 17L17 7"></path>
            <path d="M7 7h10v10"></path>
          </svg>
        </button>
      </div>

      {/* Overview Card */}
      <div className="bg-[#faf8f5] rounded-xl p-5">
        <h4 className="text-[15px] font-semibold text-[#1c1c1c] mb-4">Overview</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#5f5f5d]">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span className="text-[14px] text-[#1c1c1c]">No URL subdomain</span>
            <span className="px-2 py-0.5 bg-[#fef3c7] text-[#92400e] text-[12px] font-medium rounded">Unpublished</span>
          </div>
          <button className="p-1.5 hover:bg-[#eceae4] rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#5f5f5d]">
              <circle cx="12" cy="5" r="1.5"></circle>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="12" cy="19" r="1.5"></circle>
            </svg>
          </button>
        </div>
      </div>

      {/* Domain Options */}
      <div className="space-y-4">
        {/* Add existing domain */}
        <div className="flex items-center justify-between p-4 bg-white border border-[#eceae4] rounded-xl">
          <div className="flex items-center gap-x-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-purple-600">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <span className="text-[14px] font-medium text-[#1c1c1c]">Add existing domain</span>
                <span className="px-1.5 py-0.5 bg-[#fef3c7] text-[10px] font-medium rounded text-[#92400e]">PRO</span>
              </div>
              <p className="text-[13px] text-[#5f5f5d]">Connect a domain you already own.</p>
            </div>
          </div>
          <button className="px-4 py-2 text-[13px] font-medium text-[#1c1c1c] border border-[#1c1c1c] rounded-lg hover:bg-[#f7f4ed] transition-colors">
            Connect domain
          </button>
        </div>

        {/* Purchase new domain */}
        <div className="flex items-center justify-between p-4 bg-white border border-[#eceae4] rounded-xl">
          <div className="flex items-center gap-x-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-purple-600">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <span className="text-[14px] font-medium text-[#1c1c1c]">Purchase new domain</span>
                <span className="px-1.5 py-0.5 bg-[#fef3c7] text-[10px] font-medium rounded text-[#92400e]">PRO</span>
              </div>
              <p className="text-[13px] text-[#5f5f5d]">Buy a new domain through IONOS.</p>
            </div>
          </div>
          <button className="px-4 py-2 text-[13px] font-medium text-[#1c1c1c] border border-[#1c1c1c] rounded-lg hover:bg-[#f7f4ed] transition-colors">
            Buy new domain
          </button>
        </div>
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
        return renderDomains();
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
