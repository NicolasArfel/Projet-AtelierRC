import PropTypes from 'prop-types';

const BackProjetFormInput = ({ type, name, onChange, value, title }) => {

    const handleChange = (event) => {
        onChange(event.target.value, name)
    }

    return (
        <div className="input-field col s12">
            <input
                value={value}
                name={name}
                id={type}
                type={type}
                onChange={handleChange}
            />
            <label htmlFor={type}>
                {title}
            </label>

        </div>
    )
}

BackProjetFormInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default BackProjetFormInput;