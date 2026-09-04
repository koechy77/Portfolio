import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import database from "../data/database";

export default function Projects() {
  const [activePreviewId, setActivePreviewId] = useState(null);

  const handlePreviewToggle = (projectId) => {
    setActivePreviewId((currentId) =>
      currentId === projectId ? null : projectId,
    );
  };

  return (
    <section id="projects" className="text-white mx-4 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="font-extrabold font-supermercado text-4xl md:text-5xl lg:text-6xl  mb-5 px-4"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-2 justify-items-center">
        {database.projects?.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isPreviewOpen={activePreviewId === project.id}
            onTogglePreview={() => handlePreviewToggle(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
