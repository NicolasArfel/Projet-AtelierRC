import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { findProject } from '../../../Redux/Selectors/projectsSelectors';

import { actionAxiosProjectsPictures } from '../../../Redux/Actions/ProjetsActions';

import Banner from '../../Banner/Banner';

import './DetailProjet.css';

const DetailProjet = () => {

    // Dispatch allow us to trigger action from 'redux action' folder
    const dispatch = useDispatch();

    // Slug is a variable of URL for dynamisation routes
    const { slug } = useParams();

    // We use a .find method to store in a selectors folder. It allows you to sort the projects according to the url thanks to the 'SLUG' parameter
    const projet = useSelector((state) => findProject(state.ProjectsReducer.projects, slug))
    // console.log(projet);

    // Effect active on page load
    useEffect(() => {
        projet && dispatch(actionAxiosProjectsPictures(projet.project_id));
    }, [dispatch, projet]);

    // useSelector allow us to get all information stash in reducer pictures []
    const pictures = useSelector((state) => state.ProjectsReducer.pictures)
    console.log('pictures', pictures);

    return (
        <>
            {projet &&
                <main className="container" >
                    <Banner title={`Design par ${projet.design}`} description={projet.program}/>
                    <div className="row detail__project">
                        <div className="col s6 sticky__details-project">
                            <div className="col s12">
                                <div className="card card__detail">
                                    <div className="card-content black-text">
                                        <h2 className="center card-title card__title">{projet.project_name}</h2>
                                        <p className='card__section-title'>Projet :</p>
                                        {projet.program &&
                                            <p>{projet.program}</p>
                                        }
                                    </div>
                                    {projet.type && projet.surface_area &&
                                        <div className="card-content">
                                            <p className='card__section-title'>Type && surface:</p>
                                            <p>{projet.type} de {projet.surface_area}</p>
                                        </div>
                                    }
                                    {projet.location &&
                                        <div className="card-content">
                                            <p className='card__section-title'>location :</p>
                                            <p>{projet.location}</p>
                                        </div>
                                    }
                                    {projet.demande &&
                                        <div className="card-content">
                                            <p className='card__section-title'>Demande :</p>
                                            <p>{projet.demande}</p>
                                        </div>
                                    }
                                    <div className="card-content">
                                        <p>{projet.client}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {pictures &&
                            <div className="col s6">
                                {pictures.map(picture => (
                                    <article className="card card__article" key={picture.id}>
                                        <div className="card-image">
                                            <img className="responsive-img z-depth-2" alt={picture.name} src={`http://localhost:3001/image/projects/${picture.name}`} />
                                            {/* <img className="responsive-img z-depth-2" alt={picture.name} src={`http://www.salleanthony.fr:6520/image/projects/${picture.name}`} /> */}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        }
                    </div>
                </main>}
        </ >
    )
}

export default DetailProjet