import React from 'react'

import './Footer.css'
const LogoRC = '../../images/logo-simple.png'
const logoInsta = '../../images/instagram-brands.svg'

const footer = () => {
    return (
        <footer className="page-footer">
            <div className="row footer-content">
                <div className="col l4 s12 footer-contact">
                    <p className='black-text'>Romain Caillon</p>
                    <p className='black-text'>75010 Paris</p>
                    <a href="mailto: romaincaillon.archi@gmail.com" className='mailto'>romaincaillon.archi@gmail.com</a>
                </div>
                <div className="col l4 s12">
                    <img className='logoRC responsive-img' alt='LogoRC' src={LogoRC} />
                </div>
                <div className="col l4 s12 logoInsta">
                    <a href='https://www.instagram.com/lepetitchineur/?igshid=YmMyMTA2M2Y%3D' target="blank"><img alt='LogoRC' className='logo-insta' src={logoInsta} /></a>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <p className='copyright'>© 2022 Copyright Atelier-RC</p>
                </div>
            </div>
        </footer>
    )
}

export default footer