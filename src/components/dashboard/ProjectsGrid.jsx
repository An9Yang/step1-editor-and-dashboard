import CreateProjectCard from './CreateProjectCard';
import ProjectCard2 from './ProjectCard2';
import ProjectCard3 from './ProjectCard3';
import ProjectCard4 from './ProjectCard4';
import ProjectCard5 from './ProjectCard5';
import ProjectCard6 from './ProjectCard6';
import ProjectCard7 from './ProjectCard7';
import ProjectCard8 from './ProjectCard8';
import ProjectCard9 from './ProjectCard9';
import ProjectCard10 from './ProjectCard10';
import ProjectCard11 from './ProjectCard11';
import ProjectCard12 from './ProjectCard12';
import ProjectCard13 from './ProjectCard13';

function ProjectsGrid() {
  return (
    <div
      className="relative overflow-x-hidden grow basis-[0%] caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_3_2_2"
    >
      <div className="caret-[#1c1c1c] [color-scheme:light] pb-8 px-8">
        <div className="flex flex-col gap-y-5 gap-x-5 caret-[#1c1c1c] [color-scheme:light]">
          <div className="w-full grid gap-y-5 gap-x-5 grid-cols-[repeat(auto-fill,minmax(345px,1fr))] justify-items-center caret-[#1c1c1c] [color-scheme:light]">
            <CreateProjectCard />
            <ProjectCard2 />
            <ProjectCard3 />
            <ProjectCard4 />
            <ProjectCard5 />
            <ProjectCard6 />
            <ProjectCard7 />
            <ProjectCard8 />
            <ProjectCard9 />
            <ProjectCard10 />
            <ProjectCard11 />
            <ProjectCard12 />
            <ProjectCard13 />
          </div>
          <div
            aria-hidden="true"
            className="h-px caret-[#1c1c1c] [color-scheme:light]"
          ></div>
          <div
            role="status"
            className="flex justify-center items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light] py-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 -960 960 960"
              fill="rgb(28, 28, 28)"
              className="align-middle w-4 h-4 block overflow-x-hidden overflow-y-hidden shrink-0 rotate-[299.93deg] fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
              data-svg-size="575"
            >
              <path
                d="M480-80q-84 0-157-31t-127-85-85-127-31-157 31-157 85-127 127-85 157-31q12 0 21 9t9 21-9 21-21 9q-141 0-240.5 99.5T140-480t99.5 240.5T480-140t240.5-99.5T820-480q0-12 9-21t21-9 21 9 9 21q0 84-31 157t-85 127-127 85-157 31"
                className="inline fill-[#1c1c1c] caret-[#1c1c1c] [color-scheme:light]"
              ></path>
            </svg>
            <div className="text-[#5f5f5d] text-[14px] caret-[#5f5f5d] [color-scheme:light]">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsGrid;
