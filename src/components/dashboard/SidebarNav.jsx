import NavHomeSearch from './NavHomeSearch';
import NavProjectsSection from './NavProjectsSection';
import NavResourcesSection from './NavResourcesSection';

function SidebarNav() {
  return (
    <div
      className="min-h-0 relative grow basis-[0%] caret-[#1c1c1c] [color-scheme:light] pointer-events-none"
      data-component-id="Component_2_2"
    >
      <nav className="h-full overflow-x-hidden caret-[#1c1c1c] [color-scheme:light] pointer-events-none">
        <div className="flex flex-col gap-y-4 gap-x-4 caret-[#1c1c1c] [color-scheme:light] pointer-events-none">
          <NavHomeSearch />
          <NavProjectsSection />
          <NavResourcesSection />
        </div>
      </nav>
    </div>
  );
}

export default SidebarNav;
