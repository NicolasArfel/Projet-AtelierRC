import { DISPATCH_PROJECTS, DISPATCH_PROJECTS_PICTURES } from "../Actions/ProjetsActions";

export const initialState = {
    projects: [],
    pictures: []
};

const reducer = (state = initialState, action = {}) => {
   
    switch (action.type) {
        case DISPATCH_PROJECTS:
            // console.log('JE SUIS DANS DISPATCH_PROJECTS');
            return {
                ...state,
                projects: action.payload.projects,
            }
        case DISPATCH_PROJECTS_PICTURES:
            // console.log('JE SUIS DANS DISPATCH_PROJECTS_PICTURES');
            return {
                ...state,
                pictures: action.payload.pictures,
            }
        default:
            return state;
    }
};

export default reducer;