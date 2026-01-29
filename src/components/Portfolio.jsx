import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Portfolio() {
    return (
        <div id="projects" className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.techStack} // Mapping techStack to tags
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                        image={project.image || "https://placehold.co/600x400"} // Fallback image since data lacks images
                    />
                ))}
            </div>
        </div>
    )
}