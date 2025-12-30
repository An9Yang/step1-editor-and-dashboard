import { useState, useEffect } from 'react';

/**
 * AIProgressIndicator - AI处理中的简洁进度提示
 * 面向非技术用户：不显示具体的tool call，只显示友好的状态
 */
function AIProgressIndicator({
  steps = [],
  currentStep = 0,
  isComplete = false,
}) {
  const [dots, setDots] = useState('');

  // 动态省略号动画
  useEffect(() => {
    if (isComplete) return;
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, [isComplete]);

  // 默认步骤（面向用户的友好描述）
  const defaultSteps = [
    { label: '理解您的需求', icon: 'think' },
    { label: '设计页面结构', icon: 'design' },
    { label: '编写代码', icon: 'code' },
    { label: '优化和检查', icon: 'check' },
  ];

  const displaySteps = steps.length > 0 ? steps : defaultSteps;

  const getIcon = (iconType, isActive, isDone) => {
    const baseClass = `w-4 h-4 ${isDone ? 'text-[#16a34a]' : isActive ? 'text-[#1e52f1]' : 'text-[#d4d4d4]'}`;

    switch (iconType) {
      case 'think':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case 'design':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        );
    }
  };

  return (
    <div className="w-full">
      {/* AI 头像和标识 */}
      <div className="flex items-center gap-x-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <span className="text-[14px] font-[480] text-[#5f5f5d]">Step1 AI</span>
      </div>

      {/* 进度卡片 */}
      <div className="max-w-[85%] bg-[#f7f4ed] rounded-[16px] rounded-tl-[4px] px-4 py-4">
        {/* 当前状态标题 */}
        <div className="flex items-center gap-x-2 mb-4">
          <div className="w-5 h-5 rounded-full bg-[#1e52f1] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3 h-3 animate-spin">
              <path d="M21 12a9 9 0 11-6.219-8.56"></path>
            </svg>
          </div>
          <span className="text-[14px] font-[480] text-[#1c1c1c]">
            {displaySteps[currentStep]?.label || '正在处理'}{dots}
          </span>
        </div>

        {/* 步骤进度条 */}
        <div className="flex items-center gap-x-3">
          {displaySteps.map((step, idx) => {
            const isDone = idx < currentStep;
            const isActive = idx === currentStep;

            return (
              <div key={idx} className="flex items-center gap-x-3">
                <div className={`flex items-center gap-x-1.5 ${isDone ? 'opacity-100' : isActive ? 'opacity-100' : 'opacity-40'}`}>
                  {getIcon(step.icon, isActive, isDone)}
                  <span className={`text-[12px] ${isDone ? 'text-[#16a34a]' : isActive ? 'text-[#1e52f1]' : 'text-[#9a9a98]'}`}>
                    {step.label}
                  </span>
                </div>
                {idx < displaySteps.length - 1 && (
                  <div className={`w-8 h-0.5 ${idx < currentStep ? 'bg-[#16a34a]' : 'bg-[#e5e5e5]'}`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* 友好提示 */}
        <p className="text-[13px] text-[#9a9a98] mt-4">
          正在为您生成内容，请稍候...
        </p>
      </div>
    </div>
  );
}

export default AIProgressIndicator;
