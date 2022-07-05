import jwt_decode from "jwt-decode";

import { CHANGE_INPUT_VALUE, LOGOUT, SAVE_USER } from "../Actions/UserActions";

const token = (localStorage.getItem('token'));
// console.log('storageUser', token)
let decodedJwt = false
if (token) {
    decodedJwt = jwt_decode(token);
    console.log(decodedJwt);
}
// console.log('storageUser', user)

export const initialState = {
    email: decodedJwt ? decodedJwt.email : '',
    password: '',
    confirmPassword: '',
    isLogged: decodedJwt && true,
    firstName: decodedJwt ? decodedJwt.firstname : '',
    lastName: decodedJwt ? decodedJwt.lasntame : '',
    role: decodedJwt ? decodedJwt.role : 'visiteur',
    userId: decodedJwt ? decodedJwt.id : '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            console.log('je suis dans CHANGE_INPUT_VALUE');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case SAVE_USER:
            console.log('je suis dans SAVE_USER');
            return {
                ...state,
                // on est connecté donc on sauvegarde le pseudo, et on met isLogged=true
                isLogged: true,
                password: '',
                confirmPassword: '',
                firstName: action.payload.decodedJwt.firstname,
                lastName: action.payload.decodedJwt.lastname,
                role: action.payload.decodedJwt.role
            };
        case LOGOUT:
            console.log('je suis dans LOGOUT');
            return {
                ...state,
                isLogged: false,
                token: null,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                role: 'visiteur'
            };

        default:
            return state;
    }
};


export default reducer;