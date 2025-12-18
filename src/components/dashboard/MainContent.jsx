import ContentHeader from './ContentHeader';
import ProjectsArea from './ProjectsArea';

function MainContent() {
  return (
    <div
      className="flex overflow-hidden flex-col grow basis-[0%] h-screen caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_3"
    >
      <div className="caret-[#1c1c1c] [color-scheme:light]"></div>
      <div className="flex flex-col h-full overflow-hidden caret-[#1c1c1c] [color-scheme:light] pl-4">
        <ContentHeader />
        <ProjectsArea />
      </div>
    </div>
  );
}

export default MainContent;
