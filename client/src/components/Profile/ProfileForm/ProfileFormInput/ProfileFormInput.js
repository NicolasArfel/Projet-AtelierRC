import PropTypes from 'prop-types';

const ProfileFormInput = ({ type, name, onChange, value, title }) => {

    const handleChange = (event) => {
        onChange(event.target.value, name);
    }

    return (
        <div className="input-field col s12">
            <input
                value={value}
                name={name}                
                type={type}
                onChange={handleChange}
                placeholder={title}
            />
            {/* <label htmlFor={type}>
                {title}
            </label> */}

            {type=!"email" &&
                <span
                    className="helper-text"
                    data-error="Email non valide"
                    data-success="Email valide">
                </span>
            }
        
        </div>
    )
}

ProfileFormInput.propTypes = {
    type: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired, 
    value: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
}

export default ProfileFormInput;