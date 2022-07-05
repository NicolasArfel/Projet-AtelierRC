import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import BannerBackOffice from '../BannerBackOffice/BannerBackOffice';

import './backMobilier.css'

const title = 'Back Office'

const BackMobilier = () => {
  const dispatch = useDispatch();

  const furnitures = useSelector((state) => state.FurnituresReducer.furnitures);

  console.log('mobilier dans backprojet', furnitures);
  return (
    <main className="container" >
      <BannerBackOffice title={title} />

      <div className="row">

        <div className="col s12 right table__back-projects">
          <table className=" projects__list centered responsive-table striped">
            <thead>
              <tr>
                <th>Nom de l'article</th>
                <th>Etat</th>
                <th>Description</th>
                <th>Type</th>
                <th>Crédit photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {furnitures.map(furniture => (
                <tr key={furniture.id}>
                  <td>{furniture.furniture_name}</td>
                  <td>{furniture.condition}</td>
                  <td>{furniture.description}</td>
                  <td>{furniture.type}</td>
                  <td>{furniture.photo_credit}</td>
                  <td>
                    <button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3"
                      type="submit"
                      name="supprimer"
                      onClick={() => {
                        // dispatch(actionDeleteProject(project.project_id))
                      }}
                    >Supprimer</button>
                    <button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3"
                      type="submit"
                      name="supprimer">Modifier</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to='/back-mobilier/addMobilier'>
            <button className="button btn-large waves-effect waves-light grey darken-3">
              Ajouter un Mobilier
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default BackMobilier;