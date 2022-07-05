import PropTypes from 'prop-types';

import React from 'react'

const ContactFormInput = ({ title, type, name, value, onChange }) => {

    const handleChange = (event) => {
        onChange(event.target.value, name)
    }

    return (
        <div>
            <div className="input-field col s12">
                <input
                    id={type}
                    type={type}
                    name={name}
                    placeholder={'*' + title}
                    value={value}
                    className="validate"
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

ContactFormInput.propTypes = {
    title: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
    onChange : PropTypes.func.isRequired,
}

export default ContactFormInput