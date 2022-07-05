import React from 'react'

import BannerBackOffice from '../BannerBackOffice/BannerBackOffice';

import './BackAdministration.css'

const title = 'Back Office'

const BackAdministration = () => {
    return (
        <main className="container" >
            <BannerBackOffice title={title} />
            <div className="row">
                <table className="centered responsive-table striped">
                    <thead>
                        <tr>
                            <th>Utilisateur</th>
                            <th>Email</th>
                            <th>Rôle</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Romain caillon</td>
                            <td>romaincaillon.archi@gmail.com</td>
                            <td>Admin</td>
                            <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                        </tr>
                        <tr>
                            <td>Alan truc muche</td>
                            <td>Alan@gmail.com</td>
                            <td>user</td>
                            <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="modifier">Modifier</button></td>
                        </tr>
                        <tr>
                            <td>Jonathan trou duc</td>
                            <td>Jonathan@gmail.com</td>
                            <td>user</td>
                            <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="modifier">Modifier</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default BackAdministration