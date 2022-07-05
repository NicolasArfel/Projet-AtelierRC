import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Register.css";

const title = `S'incrire`;
const description = `Créez votre espace personnel et conservez vos articles préférés !`;

const Register = () => {
    return (
        <main className="login container center">
            <Banner title={title} description={description} />
            <div className="row ">
                <form className="col s6 right register__form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="last_name"
                                type="text"
                                className="validate" />
                            <label htmlFor="last_name">Nom</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                id="first_name"
                                type="text"
                                className="validate" />
                            <label htmlFor="first_name">Prénom</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                id="email"
                                type="email"
                                className="validate" />
                            <label htmlFor="email">Email</label>
                            <span
                                className="helper-text"
                                data-error="Email non valide"
                                data-success="Email valide"
                            ></span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                id="password"
                                type="text"
                                className="validate" />
                            <label htmlFor="password">Mot de Passe</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                id="confirm_password"
                                type="text"
                                className="validate" />
                            <label htmlFor="confirm_password">
                                Confirmer le Mot de Passe
                            </label>
                        </div>
                        <button
                            className="button btn waves-effect waves-light grey darken-3 "
                            type="submit"
                            name="action"
                        >
                            S'inscrire
                        </button>
                    </div>
                </form>
                <div className="column col s6">
                    <p>Dèjà inscrit ? Connectez-vous !</p>
                    <Link to="/login">
                        <button className="button btn-large waves-effect waves-light grey darken-3 ">
                            Se connecter
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Register;
