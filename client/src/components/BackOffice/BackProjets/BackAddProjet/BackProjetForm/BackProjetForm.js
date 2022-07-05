import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BackProjetFormInput from "./BackProjetFormInput/BackProjetFormInput";
import { useSelector, useDispatch } from 'react-redux';
import { resetInputFormAddProject } from '../../../../../Redux/Actions/BackProjectsActions';
import { useNavigate } from 'react-router-dom';

const BackProjetForm = ({
    projectName,
    location,
    date,
    program,
    surface,
    type,
    client,
    design,
    photoCredit,
    label,
    userId,
    changeInputValue,
    handlePostProject }) => {

    const dispatch = useDispatch();

    const labels = useSelector((state) => state.BackProjectsReducer.label);
    const disabled = true;
    // console.log('labels', labels);

    let navigate = useNavigate();

    const [file, setFile] = useState(null)
    const [labelValue, setLabelValue] = useState(1)
    // console.log('labelValue', labelValue);

    const projectTitle = 'Nom du projet';
    const locationTitle = 'Localisation';
    const dateTitle = 'Année';
    const programTitle = 'Programme';
    const surfaceTitle = 'Surface';
    const typeTitle = 'Type';
    const clientTitle = 'Commenditaire';
    const designTitle = 'Conception';
    const creditTitle = 'Crédit Photo';

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData()

        formData.append('cover_image', file)
        formData.append('project_name', projectName)
        formData.append('location', location)
        formData.append('date', date)
        formData.append('program', program)
        formData.append('surface_area', surface)
        formData.append('type', type)
        formData.append('client', client)
        formData.append('design', design)
        formData.append('photo_credit', photoCredit)
        formData.append('cover_photo', true)
        formData.append('status_id', labelValue)
        formData.append('user_id', userId)
        formData.append('position', 1)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        handlePostProject(formData, config);
        dispatch(resetInputFormAddProject())
        let path = `/back-projets`;
        navigate(path);
    }

    return (

        <form className="col s6 left contact__form" onSubmit={handleSubmit}>
            <div>
                <input
                    type="file"
                    name="cover_image"
                    accept="image/png, image/jpeg, image/jpg"
                    required
                    onChange={(e) => { setFile(e.target.files[0]) }}
                    className="input__file-cover-project"
                />
                <select id='label' value={labelValue} onChange={(e) => setLabelValue(e.target.value)}>
                    {labels.map((option) => (
                        <option
                            key={option.id}
                            value={option.id}
                        >
                            {'*' + option.label}
                        </option>
                    ))}
                </select>
                <label htmlFor="label">Choisi un label</label>
                <BackProjetFormInput
                    type='text'
                    name='project_name'
                    title={'*' + projectTitle}
                    value={projectName}
                    onChange={changeInputValue}
                    required
                />
                <BackProjetFormInput
                    type='text'
                    name='location'
                    title={locationTitle}
                    value={location}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='date'
                    title={dateTitle}
                    value={date}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='program'
                    title={programTitle}
                    value={program}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='surface_area'
                    title={surfaceTitle}
                    value={surface}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='type'
                    title={typeTitle}
                    value={type}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='client'
                    title={clientTitle}
                    value={client}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='design'
                    title={designTitle}
                    value={design}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='photo_credit'
                    title={creditTitle}
                    value={photoCredit}
                    onChange={changeInputValue}
                />

            </div>
            <p>(*) Champs obligatoires</p>
            <button
                className="btn waves-effect waves-light grey darken-3 button"
                type="submit"
                name="action"
                disabled={projectName === '' ? disabled : ''}
            >
                Ajouter le projet
            </button>
        </form>
    )

}

BackProjetForm.propTypes = {
    projectName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
    surface: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    design: PropTypes.string.isRequired,
    photoCredit: PropTypes.string.isRequired,
    changeInputValue: PropTypes.string.isRequired,
    handlePostProject: PropTypes.string.isRequired,
}

export default BackProjetForm;