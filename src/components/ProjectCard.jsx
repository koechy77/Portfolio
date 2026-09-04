import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  isPreviewOpen,
  onTogglePreview,
}) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-4 max-w-md w-full h-fit font-supermercado flex flex-col"
      initial={{ scale: 0.2 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3 mb-4">
        {project.tech.map((tech) => (
          <div
            key={tech.name}
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
            title={tech.name}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-6 h-6 object-contain"
            />
          </div>
        ))}
      </div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-md text-orange-400"
      />

      <h3 className="text-orange-400 font-extrabold text-center my-4 text-2xl">
        {project.title}
      </h3>
      <p className="text-xl text-center">{project.description}</p>

      <div className="flex gap-4 mt-4 justify-center">
        <button className="bg-gray-400 rounded-lg px-4 py-2">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </button>
        <button
          type="button"
          className="bg-gray-400 rounded-lg px-4 py-2 cursor-pointer"
          onClick={onTogglePreview}
        >
          {isPreviewOpen ? "Close Preview" : "Preview"}
        </button>
      </div>

      {isPreviewOpen && (
        <div className="mt-4 rounded-md overflow-hidden border border-gray-700">
          <div className="flex justify-between items-center px-3 py-2 bg-gray-700/70">
            <span className="text-sm text-orange-200">Preview</span>
            <button
              type="button"
              onClick={onTogglePreview}
              className="text-sm text-white hover:text-orange-300"
            >
              Close
            </button>
          </div>
          <iframe
            src={project.demoUrl}
            title={project.title}
            className="w-full h-60 border-0"
          />
        </div>
      )}
    </motion.div>
  );
}
