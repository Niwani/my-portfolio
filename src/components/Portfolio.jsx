import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Portfolio() {
    return (
        <div>
            <ProjectCard projects={projects} />
        </div>
    )
}