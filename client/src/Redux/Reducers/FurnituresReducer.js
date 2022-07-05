import { DISPATCH_FURNITURES, DISPATCH_FURNITURES_PICTURES } from "../Actions/FurnituresActions";

export const initialState = {
    furnitures: [],
    pictures : []
};

const reducer = (state = initialState, action = {}) => {
   
    switch (action.type) {
        case DISPATCH_FURNITURES:
            // console.log('JE SUIS DANS DISPATCH_FURNITURES');
            return {
                ...state,
                furnitures: action.payload.furnitures,
            }
        case DISPATCH_FURNITURES_PICTURES :
             console.log('Je suis dans dispatch furnitures pictures') ;
             return {
                 ...state,
                 pictures : action.payload.pictures,
             }  
        default:
            return state;
    }
};

export default reducer;