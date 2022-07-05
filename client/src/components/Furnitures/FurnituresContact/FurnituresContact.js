import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionAddSubjectValue, actionRefreshContactState, actionSubmitContact, changeInputValue } from "../../../Redux/Actions/ContactActions";
import { findFurniture } from "../../../Redux/Selectors/furnituresSelectors";
import Banner from "../../Banner/Banner";
import FurnituresContactForm from "./FurnituresContactForm/FurnituresContactForm";

const title = 'Contact';
const description = `Romain Caillon, 75010 Paris. romaincaillon.archi@gmail.com`;

const FurnituresContact = () => {
    const dispatch = useDispatch();

    const {slug} = useParams();

    const furniture = useSelector((state) => findFurniture(state.FurnituresReducer.furnitures, slug))
    
    const firstname = useSelector((state) => state.ContactReducer.firstname);
    const lastname = useSelector((state) => state.ContactReducer.lastname);
    const email = useSelector((state) => state.ContactReducer.email);
    const text = useSelector((state) => state.ContactReducer.text);
    const subject = useSelector((state) => state.ContactReducer.subject);

    useEffect(() => {
        dispatch(actionRefreshContactState()); 
        dispatch(actionAddSubjectValue(`Demande d'informations pour : ${furniture.furniture_name}`))       
     }, [dispatch, furniture.furniture_name]);

    return (

        <main className="container" >
            <Banner title={title} description={description} />
            <div className="row">
                <article className="col s6 contact__image-container">
                    <img alt='ContactImg' className='contact__img z-depth-2' src={`http://localhost:3001/image/furnitures/${furniture.name}`} />
                </article>
                <FurnituresContactForm
                    firstname={firstname}
                    lastname={lastname}
                    email={email}
                    subject={subject}
                    text={text}
                    changeInputValue={(value, name) => {
                        // console.log('changeField', { value, name });
                        dispatch(changeInputValue(value, name));
                    }}
                    handleContact={() => {
                        dispatch(actionSubmitContact())
                    }}
                />
            </div>
        </main>
    )
}

export default FurnituresContact;