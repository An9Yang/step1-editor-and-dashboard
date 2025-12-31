import { useState } from 'react';
import ComponentCard from './ComponentCard';
import ComponentPreviewCard from './ComponentPreviewCard';

// Mock component data - will be replaced with Chrome extension integration later
// layout: 'wide' = spans 2 columns (headers, navbars, footers)
// layout: 'normal' = single column (cards, buttons, small units)
const mockComponents = [
  {
    id: 'comp_001',
    name: 'Navigation Bar',
    description: 'Responsive navbar with dropdown menus and mobile drawer',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=120&fit=crop',
    source: 'vercel.com',
    category: 'Navigation',
    tags: ['navbar', 'dropdown', 'responsive'],
    layout: 'wide',
    createdAt: '2024-12-26',
  },
  {
    id: 'comp_002',
    name: 'Pricing Card',
    description: 'Single pricing tier with feature list',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop',
    source: 'linear.app',
    category: 'Pricing',
    tags: ['card', 'pricing'],
    layout: 'normal',
    createdAt: '2024-12-25',
  },
  {
    id: 'comp_003',
    name: 'Feature Icon',
    description: 'Icon with label and description',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    source: 'notion.so',
    category: 'Features',
    tags: ['icon', 'feature'],
    layout: 'normal',
    createdAt: '2024-12-24',
  },
  {
    id: 'comp_004',
    name: 'Hero Section',
    description: 'Full-width hero with gradient background and CTA buttons',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=200&fit=crop',
    source: 'stripe.com',
    category: 'Hero',
    tags: ['hero', 'gradient', 'cta'],
    layout: 'wide',
    createdAt: '2024-12-23',
  },
  {
    id: 'comp_005',
    name: 'Testimonial Card',
    description: 'Customer quote with avatar',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=350&fit=crop',
    source: 'figma.com',
    category: 'Social Proof',
    tags: ['testimonial', 'avatar'],
    layout: 'normal',
    createdAt: '2024-12-22',
  },
  {
    id: 'comp_006',
    name: 'Footer',
    description: 'Multi-column footer with links and newsletter',
    thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c2b6?w=800&h=150&fit=crop',
    source: 'tailwindui.com',
    category: 'Footer',
    tags: ['footer', 'newsletter'],
    layout: 'wide',
    createdAt: '2024-12-21',
  },
  {
    id: 'comp_007',
    name: 'CTA Button',
    description: 'Primary action button with hover effect',
    thumbnail: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=300&h=200&fit=crop',
    source: 'linear.app',
    category: 'Button',
    tags: ['button', 'cta'],
    layout: 'normal',
    createdAt: '2024-12-20',
  },
  {
    id: 'comp_008',
    name: 'Stats Counter',
    description: 'Animated number counter display',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=250&fit=crop',
    source: 'stripe.com',
    category: 'Stats',
    tags: ['stats', 'counter'],
    layout: 'normal',
    createdAt: '2024-12-19',
  },
];

function ComponentCollection({ onInsertReference }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const filteredComponents = mockComponents.filter((component) =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    component.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
    component.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleHover = (component, rect) => {
    if (component) {
      setHoveredComponent(component);
      setHoverPosition({
        x: rect.right + 8,
        y: rect.top,
      });
    } else {
      setHoveredComponent(null);
    }
  };

  const handleClick = (component) => {
    if (onInsertReference) {
      onInsertReference(`@component:${component.id}`);
    }
  };

  return (
    <div
      className="h-full min-h-0 flex flex-col caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="ComponentCollection"
    >
      <div className="w-full h-full min-h-0 relative flex flex-col caret-[#1c1c1c] [color-scheme:light]">
        {/* Header with search */}
        <div className="shrink-0 px-5 pt-5 pb-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[15px] font-semibold text-[#1c1c1c]">Component Collection</h2>
            <span className="text-[12px] text-[#9a9a98]">{filteredComponents.length} items</span>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a98]"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-[13px] bg-[#f7f4ed] rounded-[10px] border border-transparent focus:border-[#1e52f1] focus:bg-white focus:outline-none transition-colors placeholder:text-[#9a9a98]"
            />
          </div>
        </div>

        {/* Component Grid */}
        <div className="flex-1 min-h-0 overflow-y-auto px-5 pb-5">
          {filteredComponents.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {filteredComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  component={component}
                  onHover={handleHover}
                  onClick={handleClick}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-10 h-10 text-[#d0cdc6] mb-3"
              >
                <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z" />
              </svg>
              <p className="text-[14px] text-[#9a9a98]">No components found</p>
              <p className="text-[12px] text-[#c0bdb6] mt-1">Try a different search term</p>
            </div>
          )}
        </div>

        {/* Hover Preview Card */}
        {hoveredComponent && (
          <ComponentPreviewCard
            component={hoveredComponent}
            position={hoverPosition}
          />
        )}
      </div>
    </div>
  );
}

export default ComponentCollection;
