// @flow strict

import Image from "next/image";

export const underlineStyle = () => {
  return (
    <div className="flex flex-row">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
      <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
    </div>
  );
};

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full h-[450px] flex flex-col">
      {underlineStyle()}

      {/* Header */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden border-t-[2px] border-indigo-900 px-2 lg:px-4 py-2 lg:py-4">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <Image
            src={project.image}
            alt={project.name}
            width={500}
            height={400}
            className="w-full h-40 object-cover rounded mb-2"
          />

          <span className="text-cyan-400">{" " + project.description}</span>
          <br />
          <p className="text-yellow-400">
            Tools:{" "}
            <span className="text-white">{project.tools.join(", ")}</span>
          </p>
        </code>
      </div>

      {underlineStyle()}

      {/* Footer */}
      <div className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-2">
        <div className="flex justify-between">
          {project?.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 text-lg hover:text-yellow-300 hover:underline transition-colors duration-300"
            >
              Demo
            </a>
          )}

          {project?.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 text-lg hover:text-yellow-300 hover:underline transition-colors duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
