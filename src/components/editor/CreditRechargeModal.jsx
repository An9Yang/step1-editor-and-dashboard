import { useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * CreditRechargeModal - Credits 充值引导弹窗
 * 当用户 credits 用完时弹出，引导充值
 * 设计风格与 SettingsModal 保持一致
 * 使用 React Portal 渲染到 document.body，确保覆盖所有元素
 */
function CreditRechargeModal({ onClose, currentCredits = 0 }) {
  const [selectedPlan, setSelectedPlan] = useState('builder');

  // 充值方案 - 与 SettingsModal 保持一致
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      credits: 200,
      price: 20,
      description: 'For individuals',
    },
    {
      id: 'builder',
      name: 'Builder',
      credits: 500,
      price: 50,
      description: 'For growing teams',
      popular: true,
    },
    {
      id: 'pro',
      name: 'Pro',
      credits: 1000,
      price: 99,
      description: 'For large teams',
    },
  ];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleRecharge = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    console.log('Recharge with plan:', plan);
    onClose();
  };

  // 使用 Portal 渲染到 document.body，脱离组件层级限制
  const modalContent = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Modal */}
      <div className="relative bg-[#fcfbf8] rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] w-[420px] max-w-[95vw] border border-[#eceae4] overflow-hidden">

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[#eceae4] bg-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-[#fff7ed] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-[18px] font-semibold text-[#1c1c1c]">Credits Depleted</h2>
                <p className="text-[13px] text-[#5f5f5d] mt-0.5">Recharge to continue building</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-[#f7f4ed] rounded-[8px] transition-colors -mr-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#5f5f5d]">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {/* Current Credits */}
          <div className="flex items-center gap-2 mb-5 py-2.5 px-3 bg-[#fef2f2] rounded-[10px] border border-[#fecaca]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" className="w-4 h-4 shrink-0">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span className="text-[13px] text-[#dc2626]">
              Current balance: <span className="font-semibold">{currentCredits} credits</span>
            </span>
          </div>

          {/* Plan Selection */}
          <div className="space-y-2">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`
                  relative flex items-center justify-between p-4 rounded-[12px] border cursor-pointer transition-all
                  ${selectedPlan === plan.id
                    ? 'bg-white border-[#1c1c1c] shadow-sm'
                    : 'bg-[#f7f4ed] border-transparent hover:bg-[#eceae4]'
                  }
                `}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-2 left-4 px-2 py-0.5 bg-[#1c1c1c] text-white text-[10px] font-semibold rounded-full tracking-wide">
                    POPULAR
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {/* Radio */}
                  <div className={`
                    w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors
                    ${selectedPlan === plan.id ? 'border-[#1c1c1c] bg-[#1c1c1c]' : 'border-[#d0cdc6] bg-white'}
                  `}>
                    {selectedPlan === plan.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    )}
                  </div>

                  {/* Plan Info */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[15px] font-medium ${selectedPlan === plan.id ? 'text-[#1c1c1c]' : 'text-[#5f5f5d]'}`}>
                        {plan.name}
                      </span>
                      <span className="text-[12px] text-[#9a9a98]">
                        {plan.credits} credits/mo
                      </span>
                    </div>
                    <span className="text-[12px] text-[#9a9a98]">{plan.description}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <span className={`text-[18px] font-semibold ${selectedPlan === plan.id ? 'text-[#1c1c1c]' : 'text-[#5f5f5d]'}`}>
                    ${plan.price}
                  </span>
                  <span className="text-[12px] text-[#9a9a98]">/mo</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-2">
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 px-4 bg-[#f7f4ed] hover:bg-[#eceae4] text-[#1c1c1c] text-[14px] font-medium rounded-[10px] border border-transparent hover:border-[#d0cdc6] transition-all"
            >
              Maybe later
            </button>
            <button
              onClick={handleRecharge}
              className="flex-1 py-2.5 px-4 bg-[#1c1c1c] hover:bg-[#333] text-white text-[14px] font-medium rounded-[10px] shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
              Upgrade Now
            </button>
          </div>
          <p className="text-center text-[11px] text-[#9a9a98] mt-3">
            Secure payment via Stripe. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );

  // 渲染到 document.body，确保 Modal 在 DOM 最顶层
  return createPortal(modalContent, document.body);
}

export default CreditRechargeModal;
