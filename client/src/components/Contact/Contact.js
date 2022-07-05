import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Banner from '../Banner/Banner';
import ContactForm from './ContactForm/ContactForm';

import './Contact.css';
import { actionRefreshContactState, actionSubmitContact, changeInputValue } from '../../Redux/Actions/ContactActions';

const ContactImg = '../../images/contact_img.png';

const title = 'Contact';
const description = `Romain Caillon, 75010 Paris. romaincaillon.archi@gmail.com`;

const Contact = () => {

    const dispatch = useDispatch();
    const firstname = useSelector((state) => state.ContactReducer.firstname);
    const lastname = useSelector((state) => state.ContactReducer.lastname);
    const email = useSelector((state) => state.ContactReducer.email);
    const subject = useSelector((state) => state.ContactReducer.subject);
    const text = useSelector((state) => state.ContactReducer.text);

    useEffect(() => {
        dispatch(actionRefreshContactState());        
     }, [dispatch]);

    return (
        <main className="container" >
            <Banner title={title} description={description} />
            <div className="row">
                <article className="col s6">
                    <img alt='ContactImg' className='contact__img z-depth-2' src={ContactImg} />
                </article>
                <ContactForm
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

export default Contact