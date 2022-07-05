import { ACTION_SUBMIT_VALUE, ErrorSendingEmail, SuccedSendingEmail } from "../Actions/ContactActions";
import { requestContact } from "../Requests/ContactRequests";

const ContactMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case ACTION_SUBMIT_VALUE: {
            // console.log('je suis  dans ACTION_SUBMIT_VALUE');

            // I retrieve my info stored in ContactReducer and break it down
            const responseContactReducer = store.getState();
            // console.log('responseContactReducer', responseContactReducer);
            const { from, subject, text, firstname, lastname } = responseContactReducer.ContactReducer;
            // console.log('returned value input contact', { from, subject, text, firstname, lastname });

            try {

                if (subject === '' || from === '' || text === '' || firstname === '' || lastname === '') {

                    store.dispatch(ErrorSendingEmail())

                } else {
                    store.dispatch(SuccedSendingEmail())
                    await requestContact(from, subject, text, firstname, lastname);
                }

            } catch (err) {
                console.error(err);
            }

            next(action);
            break;

        }
        default:
            next(action);
    }
};

export default ContactMiddleware;