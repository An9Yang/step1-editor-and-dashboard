/**
 * DateDivider - 日期分隔条
 * 在对话中间显示日期，用于分隔不同时间段的对话
 */
function DateDivider({ date = '' }) {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center gap-x-3">
        <div className="h-px w-12 bg-[#eceae4]"></div>
        <span className="text-[12px] text-[#9a9a98] font-[480]">{date}</span>
        <div className="h-px w-12 bg-[#eceae4]"></div>
      </div>
    </div>
  );
}

export default DateDivider;
