import SearchBar from './SearchBar';
import ProjectsGrid from './ProjectsGrid';

function ProjectsArea() {
  return (
    <main
      className="relative overflow-x-auto overflow-y-auto grow basis-[0%] min-h-0 caret-[#1c1c1c] [color-scheme:light] pr-4 rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px]"
      data-component-id="Component_3_2"
    >
      <div className="h-full relative z-10 caret-[#1c1c1c] [color-scheme:light]">
        <div className="h-full relative flex flex-col caret-[#1c1c1c] [color-scheme:light]">
          <SearchBar />
          <ProjectsGrid />
        </div>
      </div>
    </main>
  );
}

export default ProjectsArea;
