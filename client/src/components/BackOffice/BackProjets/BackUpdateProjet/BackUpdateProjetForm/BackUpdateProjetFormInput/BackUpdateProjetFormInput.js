import React from 'react'

const BackUpdateProjetFormInput = ({ type, name, onChange, value, title }) => {


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
                placeholder={title}
            />
        </div>
    )
}

export default BackUpdateProjetFormInput