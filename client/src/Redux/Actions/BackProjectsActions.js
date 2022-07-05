export const CHANGE_BACK_INPUT_VALUE = 'CHANGE_BACK_INPUT_VALUE';
export const POST_PROJECT = 'POST_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DISPATCH_STATUS = 'DISPATCH_STATUS';
export const ACTION_AXIOS_LABEL = 'ACTION_AXIOS_LABEL';
export const RESET_INPUT_FORM_ADD_PROJECT = 'RESET_INPUT_FORM_ADD_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const POST_COVER_PHOTO_PROJECT = 'POST_COVER_PHOTO_PROJECT';
export const ACTION_ERROR_UPLOAD_COVER_PHOTO_PROJECT = 'ACTION_ERROR_UPLOAD_COVER_PHOTO_PROJECT';
export const ACTION_AXIOS_GET_ONLY_PROJECTS = 'ACTION_AXIOS_GET_ONLY_PROJECTS';
export const DISPATCH_ONLY_PROJECTS = 'DISPATCH_ONLY_PROJECTS';
export const POST_MULTY_PHOTO_PROJECT = 'POST_MULTY_PHOTO_PROJECT';

export const actionAxiosGetOnlyProjects = () => ({
    type: ACTION_AXIOS_GET_ONLY_PROJECTS
})

export const dispatchGetOnlyProjects = (responseProjects) => ({
    type: DISPATCH_ONLY_PROJECTS,
    payload: {
        responseProjects
    }
})

export const changeBackInputValue = (value, name) => ({
    type: CHANGE_BACK_INPUT_VALUE,
    payload: {
        value,
        name
    }
})

export const actionErrorUploadCoverPhotoProject = () => ({
    type: ACTION_ERROR_UPLOAD_COVER_PHOTO_PROJECT
})

export const resetInputFormAddProject = () => ({
    type: RESET_INPUT_FORM_ADD_PROJECT
})

export const actionPostProject = (formData, config) => ({
    type: POST_PROJECT,
    payload: {
        formData,
        config
    }
})

export const actionPostCoverPhotoProject = (project_id, formData, config) => ({
    type: POST_COVER_PHOTO_PROJECT,
    payload: {
        project_id,
        formData,
        config
    }
})

export const actionPostMultyFilePhotoProject = (project_id, formData, config) => ({
    type: POST_MULTY_PHOTO_PROJECT,
    payload: {
        project_id,
        formData,
        config
    }
})

export const actionUpdateProjet = (project_id, labelValue) => ({
    type: UPDATE_PROJECT,
    payload: {
        project_id,
        labelValue
    }
})

export const actionDeleteProject = (id) => ({
    type: DELETE_PROJECT,
    payload: {
        id,
    }
})

export const actionDispatchStatus = () => ({
    type: DISPATCH_STATUS
})


export const actionAxiosLabel = (responseLabel) => ({
    type: ACTION_AXIOS_LABEL,
    payload: {
        responseLabel
    }
})
