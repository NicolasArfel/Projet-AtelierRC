import PropTypes from 'prop-types';

import ProfileFormInput from "./ProfileFormInput/ProfileFormInput";
// import {useNavigate} from 'react-router-dom'

const ProfileForm = ({ title, firstName,lastName, email, password, confirmPassword, isLogged, changeInputValue, handleChangeProfile }) => {

    
    // const navigate = useNavigate();
    // const firstNameTitle = 'Prénom';
    // const lastNameTitle = 'Nom';
    const emailTitle = 'Email';
    const passwordTitle = 'Mot de passe';
    const confirmPasswordTitle = 'Confirmer Mot de passe';

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleChangeProfile();
        // let path = '/';
        // navigate(path);        
    }

    return (
        <form className="col s6 left login__form" onSubmit={handleSubmit} >
            <div className="row">
                {/* <ProfileFormInput
                    type='text'
                    name='firstName'
                    title={firstNameTitle}
                    value={firstName}
                    onChange={changeInputValue}
                />
                <ProfileFormInput
                    type='text'
                    name='lastName'
                    title={lastNameTitle}
                    value={lastName}
                    onChange={changeInputValue}
                /> */}
                <ProfileFormInput
                    type='email'
                    name='email'
                    title={emailTitle}
                    value={email}
                    onChange={changeInputValue}
                />
                <ProfileFormInput
                    type='password'
                    name='password'
                    title={passwordTitle}
                    value={password}
                    onChange={changeInputValue}
                    
                />
                <ProfileFormInput
                    type='password'
                    name='confirmPassword'
                    title={confirmPasswordTitle}
                    value={confirmPassword}
                    onChange={changeInputValue}
                />
                <button
                    className="btn waves-effect waves-light grey darken-3 button"
                    type="submit"
                    name="action"
                >
                    Valider les informations saisies
                </button>
            </div>
        </form>
    )
}

ProfileForm.propTypes = {
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, 
    password: PropTypes.string.isRequired, 
    isLogged: PropTypes.bool.isRequired,
    changeInputValue: PropTypes.func.isRequired,
    handleChangeProfile: PropTypes.func.isRequired,
     
}


export default ProfileForm;