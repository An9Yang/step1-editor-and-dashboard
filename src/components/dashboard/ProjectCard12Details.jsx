import ProjectCard12Thumbnail from './ProjectCard12Thumbnail';

function ProjectCard12Details() {
  return (
    <div
      className="flex items-center gap-y-2 gap-x-2 caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_3_2_2_12_1"
    >
      <a
        href="/users/GaDA6DdaNuUyR6HDTqBvGAQCyie2"
        className="block caret-[#1c1c1c] [color-scheme:light]"
      >
        <span className="text-[12px] w-9 h-9 relative flex overflow-x-hidden overflow-y-hidden shrink-0 items-center caret-[#1c1c1c] [color-scheme:light] rounded-br-full rounded-t-full rounded-bl-full border-[rgba(0,0,0,0)] border">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c"
            className="align-middle w-full h-full max-w-full block object-cover caret-[#1c1c1c] [color-scheme:light]"
          />
        </span>
      </a>
      <ProjectCard12Thumbnail />
    </div>
  );
}

export default ProjectCard12Details;
