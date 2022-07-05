import jwt_decode from "jwt-decode";

import { actionSaveUser, LOGOUT, SAVE_USER, SUBMIT_LOGIN, SUBMIT_PROFIL } from "../Actions/UserActions";
import { updateProfile } from "../Requests/ProfileRequests";
import { requestLogin, saveAuthorization, removeAuthorization } from "../Requests/Requests";

const UserMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case SUBMIT_PROFIL: {
            console.log('je suis dans SUBMIT_PROFIL');
            const responseUserReducer = store.getState();

            const { firstName, lastName, email, password, token } = responseUserReducer.UserReducer;
            // console.log('nouveau contenu', { firstName, lastName, email, password,token });

            const decodedJwt = jwt_decode(token);
            // console.log('tokendec', decodedJwt)
            const userId = decodedJwt.id
            // console.log('usermiddle',userId)

            try {
                const response = await updateProfile(userId, firstName, lastName, email, password)
                // console.log('toto',userId, firstName,lastName,email,password) 
                console.log('reponse put', response)
                if (response.status === 200) {
                    store.dispatch(actionSaveUser(decodedJwt, token));
                }

            } catch (err) {
                console.error(err)
            }

            break;
        }

        case SUBMIT_LOGIN: {
            console.log('je suis  dans SUBMIT_LOGIN');
            const responseUserReducer = store.getState();
            // console.log(responseUserReducer);
            const { email, password } = responseUserReducer.UserReducer;
            // console.log({email, password});

            try {
                const { accessToken } = await requestLogin(email, password);
                console.log('response', { accessToken });
                const decodedJwt = jwt_decode(accessToken);
                // console.log('decodedJwt', decodedJwt);
                localStorage.setItem('token', JSON.stringify(accessToken))
                store.dispatch(actionSaveUser(decodedJwt, accessToken))

            } catch (err) {
                console.error(err);
            }
            break;
        }
        case SAVE_USER: {
            console.log('je suis dans SAVE_USER middleware');
            saveAuthorization(action.payload.token);

            next(action);
            break;
        }
        case LOGOUT: {
            console.log('je suis dans LOGOUT middleware');
            // on supprime le token de axios
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            removeAuthorization();
            next(action);
            break;
        }

        default:
            next(action);
    }
};

export default UserMiddleware;