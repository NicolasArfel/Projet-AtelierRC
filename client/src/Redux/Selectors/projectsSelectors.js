export function findProject(ProjectsReducer, searchedSlug) {
    const projet = ProjectsReducer.find((findedProject) => {
        return findedProject.slug === searchedSlug;
    })
    return projet;
}

export function filteredProjects(projects, id) {
    const newProjectsList = projects.filter((project) => {
        return project.project_id !== id;
    })
    return newProjectsList;
}