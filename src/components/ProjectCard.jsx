export default function ProjectCard() {
  return (
    <div className="max-w-[500px] w-full bg-[#1b1a18] p-6 rounded-[15px] flex flex-col gap-4 border border-grey">
      {/* Project Title */}
      <span className="font-bold text-2xl">RPM NYC</span>

      {/* Desktop iframe preview */}
      {/* <div
        className="relative w-full overflow-hidden rounded-lg shadow-lg"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          src="https://rpm-nyc.vercel.app/"
          className="absolute top-0 left-0 w-[1280px] h-[720px] max-w-none transform origin-top-left
                 scale-[0.25] sm:scale-[0.3] md:scale-[0.35] lg:scale-[0.4] xl:scale-[0.5]"
          style={{ pointerEvents: "none" }}
        />
      </div> */}

      {/* Description */}
      <p className="text-[#9ca3af]">
        Built a responsive website for RPM NYC that strengthened their online
        presence, showcased their expertise, and helped attract more local
        customers.
      </p>

      {/* Tech Stack */}
      <ul className="flex gap-2 flex-wrap">
        {["ReactJS", "CSS", "Node.js"].map((tech, idx) => (
          <li
            key={idx}
            className="bg-[#0052D4] px-2 py-1 rounded-[10px] text-[14px] text-white"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex justify-between mt-2">
        <a
          href="https://rpm-nyc.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-2 text-[#0052D4] hover:opacity-90 transition cursor-pointer"
        >
          Live Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
            />
          </svg>
        </a>

        <a
          href="https://github.com/ryanwoo359/RPM-NYC"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#9ca3af] hover:opacity-90 transition cursor-pointer"
        >
          Github
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
