import { useState } from 'react';
import { createPortal } from 'react-dom';

function SettingsModal({ isOpen = true, onClose, initialTab = 'project-settings' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [projectVisibility, setProjectVisibility] = useState('Public');
  const [visibilityDropdownOpen, setVisibilityDropdownOpen] = useState(false);

  // Secrets state
  const [secrets, setSecrets] = useState([]);
  const [newSecrets, setNewSecrets] = useState([{ key: '', value: '' }]);

  // Plans state
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' or 'annual'

  // Mock user data
  const userData = {
    username: 'User_Snw8z',
    email: 'y794847929@gmail.com'
  };

  // Mock usage data
  const usageData = {
    creditsUsed: 34,
    creditsTotal: 50,
    projectsUsed: 104,
    projectsTotal: 5, // This looks like a bug in original mock (104/5?), keeping as is or assuming unlimited
    nextRenewal: 'Jan 7, 2026'
  };

  if (!isOpen) return null;

  // Sidebar tabs - Step1 design
  const sidebarTabs = [
    {
      id: 'project-settings',
      label: 'Project Settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      id: 'secrets',
      label: 'Secrets',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      id: 'plans',
      label: 'Plans & Usage',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      id: 'account',
      label: 'Account',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    }
  ];

  // Get page title and description
  const getPageInfo = () => {
    switch (activeTab) {
      case 'project-settings':
        return {
          title: 'Project Settings',
          description: 'Configure your project visibility and general settings.'
        };
      case 'secrets':
        return {
          title: 'Secrets',
          description: 'Manage environment variables and API keys for your project.'
        };
      case 'plans':
        return {
          title: 'Plans & Usage',
          description: 'View your usage and explore available plans.'
        };
      case 'account':
        return {
          title: 'Account',
          description: 'Manage your account settings.'
        };
      default:
        return { title: 'Settings', description: '' };
    }
  };

  const pageInfo = getPageInfo();

  // Render Project Settings
  const renderProjectSettings = () => (
    <div className="space-y-0">
      <div className="flex items-center justify-between py-4 border-b border-[#eceae4]">
        <div>
          <h4 className="text-[14px] font-medium text-[#1c1c1c]">Project Visibility</h4>
          <p className="text-[13px] text-[#5f5f5d] mt-0.5">Control who can view this project</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setVisibilityDropdownOpen(!visibilityDropdownOpen)}
            className="flex items-center gap-x-2 px-3 py-2 text-[14px] text-[#1c1c1c] bg-white border border-[#eceae4] rounded-[8px] hover:border-[#d0cdc6] transition-colors min-w-[120px] justify-between"
          >
            <span>{projectVisibility}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 text-[#5f5f5d] transition-transform ${visibilityDropdownOpen ? 'rotate-180' : ''}`}>
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </button>
          {visibilityDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 w-[140px] bg-white border border-[#eceae4] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 overflow-hidden">
              <button
                onClick={() => { setProjectVisibility('Public'); setVisibilityDropdownOpen(false); }}
                className={`w-full text-left px-3 py-2.5 text-[14px] transition-colors ${projectVisibility === 'Public' ? 'bg-[#f7f4ed] text-[#1e52f1]' : 'text-[#1c1c1c] hover:bg-[#f7f4ed]'}`}
              >
                Public
              </button>
              <button
                onClick={() => { setProjectVisibility('Private'); setVisibilityDropdownOpen(false); }}
                className={`w-full text-left px-3 py-2.5 text-[14px] transition-colors ${projectVisibility === 'Private' ? 'bg-[#f7f4ed] text-[#1e52f1]' : 'text-[#1c1c1c] hover:bg-[#f7f4ed]'}`}
              >
                Private
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Render Secrets
  const renderSecrets = () => {
    const handleAddSecret = () => {
      setNewSecrets([...newSecrets, { key: '', value: '' }]);
    };

    const handleRemoveSecret = (index) => {
      const updated = newSecrets.filter((_, i) => i !== index);
      setNewSecrets(updated.length === 0 ? [{ key: '', value: '' }] : updated);
    };

    const handleSecretChange = (index, field, value) => {
      const updated = [...newSecrets];
      updated[index][field] = value;
      setNewSecrets(updated);
    };

    const handleSaveSecrets = () => {
      const validSecrets = newSecrets.filter(s => s.key.trim() && s.value.trim());
      if (validSecrets.length > 0) {
        setSecrets([...secrets, ...validSecrets]);
        setNewSecrets([{ key: '', value: '' }]);
      }
    };

    const handleDeleteSavedSecret = (index) => {
      setSecrets(secrets.filter((_, i) => i !== index));
    };

    return (
      <div className="space-y-6">
        {/* New Secrets */}
        <div>
          <h4 className="text-[14px] font-medium text-[#1c1c1c] mb-3">Add New Secret</h4>
          <div className="space-y-3">
            {newSecrets.map((secret, index) => (
              <div key={index} className="flex items-center gap-x-3">
                <input
                  type="text"
                  placeholder="KEY_NAME"
                  value={secret.key}
                  onChange={(e) => handleSecretChange(index, 'key', e.target.value)}
                  className="flex-1 px-3 py-2.5 text-[14px] bg-white border border-[#eceae4] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#1e52f1] focus:border-transparent placeholder:text-[#9a9a98] transition-all"
                />
                <input
                  type="password"
                  placeholder="Value"
                  value={secret.value}
                  onChange={(e) => handleSecretChange(index, 'value', e.target.value)}
                  className="flex-1 px-3 py-2.5 text-[14px] bg-white border border-[#eceae4] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#1e52f1] focus:border-transparent placeholder:text-[#9a9a98] transition-all"
                />
                <button
                  onClick={() => handleRemoveSecret(index)}
                  className="p-2 border border-[#eceae4] rounded-[8px] hover:bg-[#f7f4ed] hover:border-[#d0cdc6] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-x-3 mt-4">
            <button
              onClick={handleAddSecret}
              className="flex items-center gap-x-2 px-4 py-2 text-[13px] font-medium text-[#1c1c1c] bg-[#f7f4ed] border border-[#eceae4] rounded-[8px] hover:bg-[#eceae4] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Another</span>
            </button>
            <button
              onClick={handleSaveSecrets}
              className="flex items-center gap-x-2 px-4 py-2 text-[13px] font-medium text-white bg-[#1c1c1c] rounded-[8px] hover:bg-[#333] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Saved Secrets */}
        <div>
          <h4 className="text-[14px] font-medium text-[#1c1c1c] mb-3">Saved Secrets</h4>
          <div className="bg-[#fcfbf8] border border-[#eceae4] rounded-[12px] min-h-[100px]">
            {secrets.length === 0 ? (
              <div className="flex items-center justify-center h-[100px]">
                <p className="text-[14px] text-[#9a9a98]">No secrets added yet</p>
              </div>
            ) : (
              <div className="p-3 space-y-2">
                {secrets.map((secret, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-[8px] border border-[#eceae4]">
                    <div className="flex items-center gap-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#5f5f5d]">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span className="text-[14px] font-medium text-[#1c1c1c]">{secret.key}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteSavedSecret(index)}
                      className="p-1.5 hover:bg-[#f7f4ed] rounded-[6px] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#ef4444]">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render Plans & Usage
  const renderPlansUsage = () => {
    const plans = [
      {
        name: 'Pro',
        description: 'For large teams',
        monthlyPrice: 99,
        annualPrice: 83,
        savings: 200,
        features: ['1000 credits/month', 'Unlimited projects', 'Custom domain', 'Priority support'],
        highlighted: true,
        buttonText: 'Upgrade to Pro'
      },
      {
        name: 'Builder',
        description: 'For growing teams',
        monthlyPrice: 50,
        annualPrice: 42,
        savings: 100,
        features: ['500 credits/month', 'Unlimited projects', 'Custom domain', 'Email support'],
        highlighted: false,
        buttonText: 'Select Builder'
      },
      {
        name: 'Starter',
        description: 'For individuals',
        monthlyPrice: 20,
        annualPrice: 17,
        savings: 40,
        features: ['200 credits/month', 'Unlimited projects', 'Custom domain', 'Email support'],
        highlighted: false,
        buttonText: 'Select Starter'
      }
    ];

    const isAnnual = billingCycle === 'annual';

    return (
      <div className="space-y-8">
        {/* Usage Card */}
        <div className="bg-[#fcfbf8] border border-[#eceae4] rounded-[16px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-[15px] font-semibold text-[#1c1c1c]">Current Usage</h4>
            <div className="flex items-center gap-x-2 text-[13px] text-[#5f5f5d] bg-white px-3 py-1.5 rounded-full border border-[#eceae4] shadow-sm">
              <span>Renews</span>
              <span className="font-medium text-[#1c1c1c]">{usageData.nextRenewal}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#5f5f5d]">Credits</span>
                <span className="font-medium text-[#1c1c1c]">{usageData.creditsUsed} / {usageData.creditsTotal}</span>
              </div>
              <div className="h-2 w-full bg-[#eceae4] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1e52f1] rounded-full"
                  style={{ width: `${(usageData.creditsUsed / usageData.creditsTotal) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#5f5f5d]">Projects</span>
                <span className="font-medium text-[#1c1c1c]">{usageData.projectsUsed} / {usageData.projectsTotal}</span>
              </div>
              <div className="h-2 w-full bg-[#eceae4] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6366f1] rounded-full"
                  style={{ width: `${(usageData.projectsUsed / usageData.projectsTotal) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Global Billing Toggle */}
        <div className="flex justify-center">
          <div className="bg-[#f7f4ed] p-1 rounded-full flex items-center relative gap-x-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all ${!isAnnual ? 'bg-white text-[#1c1c1c] shadow-sm' : 'text-[#5f5f5d] hover:text-[#1c1c1c]'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all flex items-center gap-x-2 ${isAnnual ? 'bg-white text-[#1c1c1c] shadow-sm' : 'text-[#5f5f5d] hover:text-[#1c1c1c]'
                }`}
            >
              <span>Yearly</span>
              <span className="text-[11px] font-bold text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-3 gap-5">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`p-6 rounded-[20px] transition-all flex flex-col h-full bg-white ${plan.highlighted
                    ? 'border-2 border-[#1c1c1c] shadow-[0_8px_30px_rgba(0,0,0,0.06)] scale-[1.02]'
                    : 'border border-[#eceae4] hover:border-[#d0cdc6] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
                  }`}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[18px] font-bold text-[#1c1c1c]">{plan.name}</h4>
                    {plan.highlighted && (
                      <span className="px-2.5 py-1 bg-[#1c1c1c] text-white text-[11px] font-bold rounded-full tracking-wide">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] text-[#5f5f5d] leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-x-1 mb-6">
                  <span className="text-[32px] font-bold text-[#1c1c1c] tracking-tight">${price}</span>
                  <span className="text-[14px] text-[#9a9a98] font-medium">/month</span>
                </div>

                <div className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-x-3 text-[14px] text-[#5f5f5d]">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-[#e0fdb6] flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 text-[#3f6212]">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 text-[14px] font-semibold rounded-[12px] transition-all transform active:scale-[0.98] ${plan.highlighted
                      ? 'bg-[#1c1c1c] text-white hover:bg-[#333] shadow-md'
                      : 'bg-[#f7f4ed] text-[#1c1c1c] hover:bg-[#eceae4] border border-transparent hover:border-[#d0cdc6]'
                    }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render Account
  const renderAccount = () => (
    <div className="space-y-0">
      <div className="flex items-center justify-between py-4 border-b border-[#eceae4]">
        <div className="flex items-center gap-x-4">
          <div className="w-11 h-11 rounded-[10px] bg-[#b8004c] flex items-center justify-center">
            <span className="text-white text-[16px] font-semibold">
              {userData.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#1c1c1c]">{userData.username}</p>
            <p className="text-[13px] text-[#5f5f5d]">{userData.email}</p>
          </div>
        </div>

        <button className="flex items-center gap-x-2 px-4 py-2 text-[14px] font-medium text-white bg-[#ef4444] rounded-[8px] hover:bg-[#dc2626] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  // Render content
  const renderContent = () => {
    switch (activeTab) {
      case 'project-settings': return renderProjectSettings();
      case 'secrets': return renderSecrets();
      case 'plans': return renderPlansUsage();
      case 'account': return renderAccount();
      default: return renderProjectSettings();
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal - Step1 unified design */}
      <div className="relative bg-[#fcfbf8] rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] w-[900px] max-w-[95vw] h-[620px] max-h-[90vh] flex overflow-hidden border border-[#eceae4]">

        {/* Left Sidebar */}
        <div className="w-[240px] bg-[#f7f4ed] border-r border-[#eceae4] flex flex-col shrink-0">
          <div className="p-4 border-b border-[#eceae4]">
            <h3 className="text-[14px] font-semibold text-[#1c1c1c]">Settings</h3>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            {sidebarTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2.5 flex items-center gap-x-3 transition-all mx-2 rounded-[8px] ${activeTab === tab.id
                    ? 'bg-white text-[#1e52f1] shadow-sm'
                    : 'text-[#5f5f5d] hover:bg-[#eceae4]'
                  }`}
                style={{ width: 'calc(100% - 16px)' }}
              >
                <span className={activeTab === tab.id ? 'text-[#1e52f1]' : 'text-[#5f5f5d]'}>
                  {tab.icon}
                </span>
                <span className="text-[14px] font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col min-w-0 bg-white">
          {/* Header */}
          <div className="px-6 pt-5 pb-4 flex items-start justify-between border-b border-[#eceae4]">
            <div>
              <h2 className="text-[20px] font-semibold text-[#1c1c1c]">{pageInfo.title}</h2>
              <p className="text-[14px] text-[#5f5f5d] mt-1">{pageInfo.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#f7f4ed] rounded-[8px] transition-colors -mr-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#5f5f5d]">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default SettingsModal;
