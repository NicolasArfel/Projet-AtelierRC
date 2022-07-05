export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ACTION_SUBMIT_VALUE = 'ACTION_SUBMIT_VALUE';
export const ERROR_SENDING_EMAIL = 'ERROR_SENDING_EMAIL';
export const SUCCED_SENDING_EMAIL = 'SUCCED_SENDING_EMAIL';
export const REFRESH_CONTACT_STATE = 'REFRESH_CONTACT_STATE';
export const ADD_SUBJECT_VALUE = 'ADD_SUBJECT_VALUE';
// We create a type of action allowing us to recognize it to trigger the requests axios
export const changeInputValue = (value, name) => ({
    type: CHANGE_INPUT_VALUE,
    payload: {
        value,
        name
    }
})

export const actionSubmitContact = () => ({
    type: ACTION_SUBMIT_VALUE,
})

export const ErrorSendingEmail = () => ({
    type: ERROR_SENDING_EMAIL
})

export const SuccedSendingEmail = () => ({
    type: SUCCED_SENDING_EMAIL
})

export const actionRefreshContactState = () => ({
    type: REFRESH_CONTACT_STATE
})

export const actionAddSubjectValue = (value) => ({
    type: ADD_SUBJECT_VALUE,
    payload: {
        value
    }
})