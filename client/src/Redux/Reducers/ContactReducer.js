import { ADD_SUBJECT_VALUE, CHANGE_INPUT_VALUE, ERROR_SENDING_EMAIL, REFRESH_CONTACT_STATE, SUCCED_SENDING_EMAIL } from "../Actions/ContactActions";

export const initialState = {
    lastname: '',
    firstname: '',
    from: '',
    subject: '',
    text: '',
    error: false,
    succed: false
};

const ContactReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            // console.log('je suis dans CHANGE_INPUT_VALUE de ContactReducer');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case ERROR_SENDING_EMAIL:
            return {
                ...state,
                error: true,
                succed: false,
            }
        case SUCCED_SENDING_EMAIL:
            return {
                ...state,
                error: false,
                succed: true,
                lastname: '',
                firstname: '',
                from: '',
                subject: '',
                text: '',
            }

        case REFRESH_CONTACT_STATE :
            return {
                ...state,
                error: false,
                succed: false,
            }
        
        case ADD_SUBJECT_VALUE :
        return {
                ...state, 
                subject: action.payload.value
        }
        default:
            return state;
    }
};

export default ContactReducer;