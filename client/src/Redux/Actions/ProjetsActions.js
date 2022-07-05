// We instantiate the name of the action in a variable
export const AXIOS_PROJECTS = 'AXIOS_PROJECTS';
export const DISPATCH_PROJECTS = 'DISPATCH_PROJECTS';
export const AXIOS_PROJECTS_PICTURES = 'AXIOS_PROJECTS_PICTURES';
export const DISPATCH_PROJECTS_PICTURES = 'DISPATCH_PROJECTS_PICTURES';


// We create a type of action allowing us to recognize it to trigger the requests axios
export const actionAxiosProjects = () => ({
    type: AXIOS_PROJECTS
})

export const actionDispatchProjects = (projects) => ({
    type: DISPATCH_PROJECTS,
    payload: {
        projects
    }
})

export const actionAxiosProjectsPictures = (project_id) => ({
    type: AXIOS_PROJECTS_PICTURES,
    project_id
})

export const actionDispatchProjectsPictures = (pictures) => ({
    type: DISPATCH_PROJECTS_PICTURES,
    payload: {
        pictures
    }
})