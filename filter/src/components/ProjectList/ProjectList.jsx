export default function ProjectList({projects}) {
    return (
        <div className="projects">
            {projects.map(project => {
                return (
                    <img key={project.id} className="project" src={project.img} alt={projects.category}/>
                )
            })}
        </div>
    )
}