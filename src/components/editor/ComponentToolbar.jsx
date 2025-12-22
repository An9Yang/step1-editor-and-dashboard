function ComponentToolbar() {
  const suggestions = [
    { icon: '📱', text: 'Add Mobile Menu', highlight: true },
    { icon: '🔍', text: 'Add Search Modal', highlight: false },
    { icon: '🛒', text: 'Add Cart Drawer', highlight: false },
    { icon: '✨', text: 'Add Scroll Animations', highlight: false },
  ];

  return (
    <div
      className="bg-[#fcfbf8] w-full relative py-2 rounded-t-[8px]"
      data-component-id="Component_2_2_1"
    >
      <div className="flex items-center gap-x-2 mb-2 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4">
          <path d="M14.25 17.75h-4.5V18a2.25 2.25 0 0 0 4.5 0zm3.5-8.25a5.75 5.75 0 1 0-9.653 4.223c.688.637 1.346 1.496 1.571 2.527h4.664c.225-1.03.883-1.89 1.571-2.527A5.73 5.73 0 0 0 17.75 9.5m1.5 0c0 2.105-.898 4-2.33 5.324-.712.66-1.17 1.414-1.17 2.176v1a3.75 3.75 0 1 1-7.5 0v-1c0-.762-.458-1.516-1.17-2.176A7.25 7.25 0 1 1 19.25 9.5" />
        </svg>
        <span className="text-[12px] text-[#5f5f5d] font-[480]">Suggested next steps</span>
      </div>
      <div className="w-full flex flex-wrap gap-2 select-none pb-1 px-3 overflow-x-auto">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            type="button"
            className={`font-normal text-[14px] h-7 flex justify-center items-center gap-x-1.5 select-none px-3 py-2 rounded-[8px] transition-all duration-200 hover:scale-105 ${
              suggestion.highlight
                ? 'bg-gradient-to-r from-[#e8f0fe] to-[#f0e8fe] border border-[#1e52f1]/20 shadow-sm'
                : 'bg-[#f7f4ed] hover:bg-[#eceae4]'
            }`}
          >
            <span>{suggestion.icon}</span>
            <span>{suggestion.text}</span>
          </button>
        ))}
      </div>
      <div className="absolute w-16 h-full pointer-events-none right-0 top-0 bg-gradient-to-l from-[#fcfbf8] to-transparent"></div>
    </div>
  );
}

export default ComponentToolbar;
