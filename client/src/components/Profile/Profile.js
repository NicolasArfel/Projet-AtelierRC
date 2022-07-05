import { useDispatch, useSelector } from "react-redux";
import { actionSubmitProfil, changeInputValue } from "../../Redux/Actions/UserActions";
import Banner from "../Banner/Banner";
import './Profile.css'
import ProfileForm from "./ProfileForm/ProfileForm";

const title = 'Profil';
const description = `Vous pouvez modifier les informations vous concernant ici .`;

const Profile = () => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.UserReducer.firstName);
    const lastName = useSelector((state) => state.UserReducer.lastName);
    const email = useSelector((state) => state.UserReducer.email);
    const password = useSelector((state) => state.UserReducer.password);
    const confirmPassword = useSelector((state) => state.UserReducer.confirmPassword);
    const isLogged = useSelector((state) => state.UserReducer.isLogged);

    const user = useSelector((state) => state.UserReducer)
    
    const samePassword = password === confirmPassword;

    return (
        <main className="container">
            <Banner title={title} description={description} />
            <div className="row ">
                <div className='column col s6 left user__info'>
                    <h3>{firstName} {lastName}</h3>
                    <p>Email : {email}</p>
                    {/* <p>Numéro de Téléphone : 0601020304</p> */}
                    {/* <p>Adresse : Perpette les alouettes</p> */}
                    {/* <p>Ville : 75010 Paris</p> */}
                </div>
                <ProfileForm
                    title={title}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    isLogged={isLogged}
                    changeInputValue={(value, name) => {
                        // console.log('changeField', { value, name });
                        dispatch(changeInputValue(value, name));
                    }}
                    handleChangeProfile={() => {
                        if(samePassword) {
                        dispatch(actionSubmitProfil(user.userId))
                        console.log(user.userId)
                        } else {
                            alert('Votre confirmation de Mot de passe doit être la même');
                        }
                    }}
                />
                    </div>

        </main>
    )
}

export default Profile;