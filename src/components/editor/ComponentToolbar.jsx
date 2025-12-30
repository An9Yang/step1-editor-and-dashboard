function ComponentToolbar() {
  // Mobile icon
  const MobileIcon = ({ highlight }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path d="M7.5 2.25A2.25 2.25 0 0 0 5.25 4.5v15a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75zm3.75 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" />
    </svg>
  );

  // Search icon
  const SearchIcon = ({ highlight }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5M2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5" />
    </svg>
  );

  // Cart icon
  const CartIcon = ({ highlight }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path d="M2.25 3a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378a2.25 2.25 0 0 1 1.898-1.042h10.473a.75.75 0 0 0 .726-.564l1.5-5.75a.75.75 0 0 0-.726-.936H6.182l-.448-1.68A1.876 1.876 0 0 0 3.92 6H3l-.75-3zm5.25 17.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m10.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </svg>
  );

  // Animation/Sparkle icon
  const SparkleIcon = ({ highlight }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path d="M9.813 2.25a.75.75 0 0 1 .72.54l.902 3.166a3.75 3.75 0 0 0 2.608 2.609l3.166.901a.75.75 0 0 1 0 1.44l-3.166.902a3.75 3.75 0 0 0-2.609 2.608l-.901 3.166a.75.75 0 0 1-1.44 0l-.902-3.166a3.75 3.75 0 0 0-2.608-2.609l-3.166-.901a.75.75 0 0 1 0-1.44l3.166-.902a3.75 3.75 0 0 0 2.609-2.608l.901-3.166a.75.75 0 0 1 .72-.539m8.437 6a.75.75 0 0 1 .72.54l.346 1.212a1.875 1.875 0 0 0 1.305 1.304l1.211.346a.75.75 0 0 1 0 1.44l-1.211.346a1.875 1.875 0 0 0-1.305 1.304l-.346 1.212a.75.75 0 0 1-1.44 0l-.346-1.212a1.875 1.875 0 0 0-1.304-1.304l-1.212-.346a.75.75 0 0 1 0-1.44l1.212-.346a1.875 1.875 0 0 0 1.304-1.304l.346-1.212a.75.75 0 0 1 .72-.54" />
    </svg>
  );

  const suggestions = [
    { Icon: MobileIcon, text: 'Add Mobile Menu', highlight: true },
    { Icon: SearchIcon, text: 'Add Search Modal', highlight: false },
    { Icon: CartIcon, text: 'Add Cart Drawer', highlight: false },
    { Icon: SparkleIcon, text: 'Add Scroll Animations', highlight: false },
  ];

  return (
    <div
      className="bg-[#fcfbf8] w-full relative py-2 rounded-t-[8px]"
      data-component-id="Component_2_2_1"
    >
      <div className="flex items-center gap-x-2 mb-2 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(95, 95, 93)" className="w-4 h-4 shrink-0">
          <path d="M14.25 17.75h-4.5V18a2.25 2.25 0 0 0 4.5 0zm3.5-8.25a5.75 5.75 0 1 0-9.653 4.223c.688.637 1.346 1.496 1.571 2.527h4.664c.225-1.03.883-1.89 1.571-2.527A5.73 5.73 0 0 0 17.75 9.5m1.5 0c0 2.105-.898 4-2.33 5.324-.712.66-1.17 1.414-1.17 2.176v1a3.75 3.75 0 1 1-7.5 0v-1c0-.762-.458-1.516-1.17-2.176A7.25 7.25 0 1 1 19.25 9.5" />
        </svg>
        <span className="text-[12px] text-[#5f5f5d] font-[480]">Suggested next steps</span>
      </div>
      <div className="w-full flex flex-nowrap gap-2 select-none pb-1 px-3 overflow-x-auto scrollbar-hide">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            type="button"
            className={`font-normal text-[14px] h-7 flex items-center gap-x-1.5 select-none px-3 py-2 rounded-[8px] transition-colors whitespace-nowrap shrink-0 ${
              suggestion.highlight
                ? 'bg-[#e8eeff] text-[#1e52f1] border border-[#1e52f1]/15'
                : 'bg-[#f7f4ed] text-[#1c1c1c] hover:bg-[#eceae4]'
            }`}
          >
            <suggestion.Icon />
            <span>{suggestion.text}</span>
          </button>
        ))}
      </div>
      <div className="absolute w-16 h-full pointer-events-none right-0 top-0 bg-gradient-to-l from-[#fcfbf8] to-transparent"></div>
    </div>
  );
}

export default ComponentToolbar;
