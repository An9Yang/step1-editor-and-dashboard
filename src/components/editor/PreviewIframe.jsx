import { useState } from 'react';
import IframeContent from './IframeContent';
import CreditRechargeModal from './CreditRechargeModal';

function PreviewIframe() {
  const [showCreditModal, setShowCreditModal] = useState(false);
  // 模拟 credits 数据 - 设为 0 以测试充值弹窗
  const [credits] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 检查 credits 是否足够
    if (credits <= 0) {
      setShowCreditModal(true);
      return;
    }

    // 正常发送消息逻辑
    console.log('Sending message...');
  };

  return (
    <>
      <form
        id="chat-input"
        onSubmit={handleSubmit}
        className="bg-[#f7f4ed] relative flex flex-col gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] mb-0 p-3 rounded-br-[24px] rounded-t-[24px] rounded-bl-[24px] border-[#eceae4] border group"
        data-component-id="Component_2_2_2"
      >
        <div className="caret-[#1c1c1c] [color-scheme:light]">
          <div className="w-full relative flex grow basis-[0%] items-center caret-[#1c1c1c] [color-scheme:light] m-1">
            <div
              tabIndex="0"
              className="leading-snug [font-variant-ligatures:none] [font-variant-caps:normal] normal-nums [font-variant-east-asian:normal] [font-variant-alternates:normal] [font-variant-position:normal] [font-variant-emoji:normal] [white-space-collapse:break-spaces] [text-wrap-mode:wrap] w-full min-w-0 min-h-10 max-h-[379.4px] relative overflow-x-hidden outline outline-2 outline-[rgba(0,0,0,0)] outline-offset-2 caret-[#1c1c1c] [color-scheme:light]"
            >
              <p className="[font-variant-ligatures:none] [font-variant-caps:normal] normal-nums [font-variant-east-asian:normal] [font-variant-alternates:normal] [font-variant-position:normal] [font-variant-emoji:normal] caret-[#1c1c1c] [color-scheme:light] my-0">
                <br />
              </p>
            </div>
          </div>
        </div>
        <IframeContent onSendClick={() => credits <= 0 && setShowCreditModal(true)} />
      </form>

      {/* Credit Recharge Modal - credits 不足时显示 */}
      {showCreditModal && (
        <CreditRechargeModal
          onClose={() => setShowCreditModal(false)}
          currentCredits={credits}
        />
      )}
    </>
  );
}

export default PreviewIframe;
