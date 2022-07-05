import { actionAxiosProjects, actionDispatchProjects } from '../Actions/ProjetsActions'
import { actionAxiosLabel, actionErrorUploadCoverPhotoProject, ACTION_AXIOS_GET_ONLY_PROJECTS, DELETE_PROJECT, dispatchGetOnlyProjects, DISPATCH_STATUS, POST_COVER_PHOTO_PROJECT, POST_MULTY_PHOTO_PROJECT, POST_PROJECT, UPDATE_PROJECT } from "../Actions/BackProjectsActions";
import { deleteProject, findAllProjects, getLabelProject, postNewProject, updateCoverPhotoProject, UpdateProject, uploadMorePhotoProject } from "../Requests/BackAdminProjectRequests";
import { filteredProjects } from "../Selectors/projectsSelectors";
import { AxiosError } from 'axios';

const BackProjectsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case ACTION_AXIOS_GET_ONLY_PROJECTS: {

            const responseProjects = await findAllProjects();

            store.dispatch(
                dispatchGetOnlyProjects(responseProjects.data)
            );

            break;
        }
        case DELETE_PROJECT: {

            const responseProjects = await deleteProject(action.payload.id);
            // console.log('response delete', responseProjects.status)

            if (responseProjects.status === 204) {
                const responseProjectReducer = store.getState();
                // console.log(responseProjectReducer.ProjectsReducer.projects)
                const newState = filteredProjects(responseProjectReducer.ProjectsReducer.projects, action.payload.id);
                // console.log(newState)
                store.dispatch(
                    dispatchGetOnlyProjects(newState)
                );
            }
            // console.log('projects middleware response', responseProjects);

            break;
        }
        case POST_PROJECT: {
            // console.log('je suis dans POST_PROJECT');

            const { formData, config } = action.payload
            // console.log('stateBackProject = ', formData);

            try {
                const response = await postNewProject(formData, config);
                // console.log('reponse back', response)
                if (response.status === 200) {
                    store.dispatch(
                        actionAxiosProjects()
                    );
                }
            } catch (err) {
                console.error(err)
            }
        }
            break;
        case POST_COVER_PHOTO_PROJECT: {
            // console.log('je suis dans POST_PROJECT');

            const { project_id, formData, config } = action.payload
            // console.log('stateBackProject = ', formData);

            try {
                const response = await updateCoverPhotoProject(project_id, formData, config);
                // console.log('reponse back', AxiosError)
                if (!response) {
                    store.dispatch(
                        actionErrorUploadCoverPhotoProject()
                    );
                }
                if (response.status === 200) {
                    store.dispatch(
                        actionAxiosProjects()
                    );
                }
            } catch (err) {
                console.error(err)
            }
        }
            break;
        case POST_MULTY_PHOTO_PROJECT: {
            // console.log('je suis dans POST_MULTY_PHOTO_PROJECT');

            const { project_id, formData, config } = action.payload
            // console.log('stateBackProject = ', formData);

            try {
                const response = await uploadMorePhotoProject(project_id, formData, config);
                if (response.status === 200) {
                    store.dispatch(
                        actionAxiosProjects()
                    );
                }
            } catch (err) {
                console.error(err)
            }
        }
            break;
        case UPDATE_PROJECT: {
            console.log('je suis dans UPDATE_PROJECT');

            const { project_id, labelValue } = action.payload
            const responseBackReducer = store.getState();
            const data = responseBackReducer.BackProjectsReducer;
            // console.log(data);
            const newData = { ...data, labelValue: labelValue }
            // console.log('====================================');
            // console.log(newData);
            // console.log('====================================');

            try {
                const response = await UpdateProject(project_id, newData);
                console.log('reponse back', response)
                if (response.status === 200) {
                    store.dispatch(
                        actionAxiosProjects()
                    );
                }
            } catch (err) {
                console.error(err)
            }
        }
            break;
        case DISPATCH_STATUS: {
            // console.log('je suis dans DISPATCH_STATUS');
            try {
                const responseLabel = await getLabelProject()
                // console.log('responseLabel', responseLabel);
                store.dispatch(
                    actionAxiosLabel(responseLabel)
                );
            } catch (err) {
                console.error(err)
            }
            break;
        }
        default:
            next(action);
    }
};

export default BackProjectsMiddleware;