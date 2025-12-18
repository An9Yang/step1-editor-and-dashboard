import { Link } from 'react-router-dom';
import ProjectCard7Details from './ProjectCard7Details';

function ProjectCard7() {
  return (
    <div
      className="w-full max-w-[420px] caret-[#1c1c1c] [color-scheme:light]"
      data-component-id="Component_3_2_2_7"
    >
      <div className="relative flex flex-col caret-[#1c1c1c] [color-scheme:light] group">
        <div className="relative flex flex-col caret-[#1c1c1c] [color-scheme:light] mb-3">
          <Link
            to="/projects/35e240b1-3172-475b-8547-4e7bdb08388b"
            className="bg-[#f7f4ed] w-full aspect-video relative block overflow-x-hidden overflow-y-hidden caret-[#1c1c1c] [color-scheme:light] rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] group"
          >
            <div className="w-full h-full relative caret-[#1c1c1c] [color-scheme:light]">
              <img
                alt="Screenshot of Kawaii Kitty Diary"
                loading="lazy"
                src="https://lovable.dev/_next/image?url=https%3A%2F%2Fscreenshot2.lovable.dev%2F5c843b4f-5eae-40f3-ad34-3358b322730d%2Fid-preview-9bfda257--35e240b1-3172-475b-8547-4e7bdb08388b.lovable.app-1764235207188.png&w=3840&q=75"
                className="text-[rgba(0,0,0,0)] align-middle w-full h-full max-w-full absolute block object-cover object-[50%_0%] caret-[rgba(0,0,0,0)] [color-scheme:light] rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] border-[#eceae4] inset-0 border"
              />
              <div
                role="button"
                tabIndex="0"
                aria-label="Add to favorites"
                className="bg-[rgba(247,244,237,0.8)] text-[16px] w-8 h-8 absolute z-[5] flex justify-center items-center opacity-0 backdrop-blur-sm caret-[#1c1c1c] [color-scheme:light] [appearance:button] p-0 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] left-auto right-2 top-2 bottom-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgba(28, 28, 28, 0.8)"
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                  className="text-[rgba(28,28,28,0.8)] text-center align-middle w-5 h-5 block overflow-x-hidden overflow-y-hidden shrink-0 opacity-0 fill-[rgba(28,28,28,0.8)] caret-[rgba(28,28,28,0.8)] [color-scheme:light]"
                  data-svg-size="948"
                >
                  <path
                    fill="rgba(28, 28, 28, 0.8)"
                    d="M12 2.25a.75.75 0 0 1 .693.462l2.204 5.3 5.722.46a.75.75 0 0 1 .429 1.316l-4.36 3.735 1.332 5.584a.75.75 0 0 1-1.12.814L12 16.929 7.1 19.92a.75.75 0 0 1-1.12-.814l1.332-5.584-4.36-3.735a.75.75 0 0 1 .429-1.316l5.722-.46 2.205-5.3.05-.1A.75.75 0 0 1 12 2.25m-1.688 6.762a.75.75 0 0 1-.632.459l-4.382.351 3.338 2.86c.213.183.307.47.242.744L7.858 17.7l3.752-2.29.092-.048a.75.75 0 0 1 .689.048l3.75 2.29-1.019-4.274a.75.75 0 0 1 .242-.744l3.337-2.86-4.38-.351a.75.75 0 0 1-.632-.46L12 4.953z"
                    className="inline fill-[rgba(28,28,28,0.8)] caret-[rgba(28,28,28,0.8)] [color-scheme:light]"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <ProjectCard7Details />
      </div>
    </div>
  );
}

export default ProjectCard7;
