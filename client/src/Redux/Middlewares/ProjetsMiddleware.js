import { getAllProjects, getAllProjectsPictures } from '../Requests/Requests';
import { AXIOS_PROJECTS, actionDispatchProjects, AXIOS_PROJECTS_PICTURES, actionDispatchProjectsPictures,  } from '../Actions/ProjetsActions';

const ProjetsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case AXIOS_PROJECTS:
            // console.log('je suis dans AXIOS_PROJECTS');
            try {
                const responseProjects = await getAllProjects();
                // console.log('projects middleware response', responseProjects);
                store.dispatch(
                    actionDispatchProjects(responseProjects)
                );

            } catch (err) {
                console.error(err)
            }

            break;
        case AXIOS_PROJECTS_PICTURES:
            // console.log('action =',action);
            // console.log('je suis dans AXIOS_PROJECTS_PICTURES');
            try {
                const responseProjectsPictures = await getAllProjectsPictures(action.project_id);
                // console.log('responseProjectsPictures', responseProjectsPictures);

                store.dispatch(
                    actionDispatchProjectsPictures(responseProjectsPictures)
                )

            } catch (err) {
                console.error(err)
            }
            break;
        default:
            next(action);
    }
};

export default ProjetsMiddleware;