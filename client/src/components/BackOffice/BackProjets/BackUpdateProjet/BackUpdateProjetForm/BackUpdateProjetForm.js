import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BackUpdateProjetFormInput from './BackUpdateProjetFormInput/BackUpdateProjetFormInput'
import { useNavigate } from 'react-router-dom';
import { resetInputFormAddProject } from '../../../../../Redux/Actions/BackProjectsActions';

const BackUpdateProjetForm = ({
    project_id,
    projectName,
    location,
    slug,
    date,
    program,
    surface,
    type,
    client,
    design,
    photoCredit,
    changeInputValue,
    handlePostProject }) => {

    // const [file, setFile] = useState(null)
    const [labelValue, setLabelValue] = useState(1)
    // console.log('labelValue', labelValue);

    const labels = useSelector((state) => state.BackProjectsReducer.label);
    // console.log('labels', labels);
    const disabled = true;

    let isConfirm = false;

    const dispatch = useDispatch();
    let navigate = useNavigate();

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

        await handlePostProject(project_id, labelValue);

        // I check if my input is empty or not. If is not i replace some carac for build a cool slug
        if (projectName) {
            // I format my projectName to skip spaces and some other carac for build a cool name
            const slugName = projectName.replace(/(?!\w|\s)./g, '')
                .replace(/\s+/g, ' ')
                .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
            // with my new cool name i build a slug and i exploit it to navigate when my project is updated
            const newSlugName = slugName.replace(/ +/g, "-").toLowerCase()
            let path = `/back-projets/updateProject/${newSlugName}`;
            navigate(path);
        }
    }

    return (
        <form className="col s6 left contact__form" onSubmit={handleSubmit}>
            {isConfirm === true ? <p className='isConfirm__form-update-project'>Changements enregistrés</p> : ''}
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
            <BackUpdateProjetFormInput
                type='text'
                name='project_name'
                title={'*' + projectTitle}
                value={projectName}
                onChange={changeInputValue}
                required
            />
            <BackUpdateProjetFormInput
                type='text'
                name='location'
                title={locationTitle}
                value={location}
                onChange={changeInputValue}
            />
            <BackUpdateProjetFormInput
                type='text'
                name='date'
                title={dateTitle}
                value={date}
                onChange={changeInputValue}
            />
            <BackUpdateProjetFormInput
                type='text'
                name='program'
                title={programTitle}
                value={program}
                onChange={changeInputValue}
            />
            <BackUpdateProjetFormInput
                type='text'
                name='surface_area'
                title={surfaceTitle}
                value={surface}
                onChange={changeInputValue}
            />
            <BackUpdateProjetFormInput
                type='text'
                name='type'
                title={typeTitle}
                value={type}
                onChange={changeInputValue}
            />
            <BackUpdateProjetFormInput
                type='text'
                name='client'
                title={clientTitle}
                value={client}
                onChange={changeInputValue}
            />
            <BackUpdateProjetFormInput
                type='text'
                name='design'
                title={designTitle}
                value={design}
                onChange={changeInputValue}
            />
            <BackUpdateProjetFormInput
                type='text'
                name='photo_credit'
                title={creditTitle}
                value={photoCredit}
                onChange={changeInputValue}
            />
            <p>(*) Champs obligatoires</p>
            <button
                className="btn waves-effect waves-light grey darken-3 button"
                type="submit"
                name="action"
                onClick={() => isConfirm = true}
            >
                Valider les modifications
            </button>
        </form>
    )
}

export default BackUpdateProjetForm