import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Login.css'
import LoginForm from "./LoginForm/LoginForm";
import { actionSubmitLogin, changeInputValue } from '../../Redux/Actions/UserActions';

const title = 'Se connecter';
const description = 'Grâce à votre espace personnel, vous serez en mesure de retrouver vos articles préférés !';

const Login = () => {

    const dispatch = useDispatch();
    const email = useSelector((state) => state.UserReducer.email);
    const password = useSelector((state) => state.UserReducer.password);
    const isLogged = useSelector((state) => state.UserReducer.isLogged);

    return (
        <main className="login container center" >
            <Banner title={title} description={description} />
            <div className="row ">
                <LoginForm
                    title={title}
                    email={email}
                    password={password}
                    isLogged={isLogged}
                    changeInputValue={(value, name) => {
                        // console.log('changeField', { value, name });
                        dispatch(changeInputValue(value, name));
                    }}
                    handleLogin={() => {
                        dispatch(actionSubmitLogin())
                    }}
                />
                <div className="column col s6">
                    <p>Vous n'avez pas de compte ? Inscrivez-vous !</p>
                    <Link to='/register'>
                        <button className="button btn-large waves-effect waves-light grey darken-3">
                            S'inscrire
                        </button>
                    </Link>
                </div>
            </div>
        </main>

    )
};

export default Login;
