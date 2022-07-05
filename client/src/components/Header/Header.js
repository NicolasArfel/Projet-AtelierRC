import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { actionLogout } from '../../Redux/Actions/UserActions';

import './Header.css';
const logoInsta = '../../images/instagram-brands.svg'
const LogoRC = '../../images/logo-simple.png'

const Header = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const isLogged = useSelector((state) => state.UserReducer.isLogged);
    const role = useSelector((state) => state.UserReducer.role);

    const activeLink = ({ isActive }) => {
        return isActive ? "active-link" : ""
    }

    return (
        <div>
            <header className="center">
                <nav className="center " role="navigation">
                    <span href='#' id="logo-container" className="brand-logo center"><img alt='LogoRC responsive-img' className='logo_header' src={LogoRC} /></span>
                    <div className="nav-wrapper container">
                        <ul className="left hide-on-med-and-down">
                            <li className='navlink'>
                                <NavLink to="/" className={activeLink} >
                                    Projets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/mobilier" className={activeLink} >
                                    Mobilier
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <NavLink to="/apropos" className={activeLink} >
                                    A propos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={activeLink} >
                                    Contact
                                </NavLink>
                            </li>
                            {!isLogged ?
                                <li>
                                    <NavLink to="/login" className={activeLink}>
                                        Connexion
                                    </NavLink>
                                </li>
                                :
                                <>
                                    {role === 'admin' ?
                                        <li className='navlink'>
                                            <NavLink to="/back-projets" className={activeLink} >
                                                Backoffice
                                            </NavLink>
                                        </li>
                                        :
                                        null
                                    }
                                    {isLogged &&
                                    <li>
                                        <Link to="/profile">
                                            <i className="black-text material-icons">person</i>
                                        </Link>
                                    </li>
                                    }
                                    <button
                                        className="btn-flat"
                                        onClick={() => {
                                            dispatch(
                                                actionLogout(),
                                            );
                                            navigate("../login", { replace: true });
                                        }}
                                    >
                                        <i className="material-icons">exit_to_app</i>
                                    </button>
                                </>
                            }
                        </ul>
                        <ul id="nav-mobile" className="sidenav">
                            <div className="col l4 s12 logoInsta">
                                <a href='https://www.instagram.com/lepetitchineur/?igshid=YmMyMTA2M2Y%3D' target="blank"><img alt='LogoRC' className='insta' src={logoInsta} /></a>
                            </div>
                            <li className="li__side-nav">
                                <NavLink to="/" className={activeLink} >
                                    Projets
                                </NavLink>
                            </li>
                            <li className="li__side-nav">
                                <NavLink to="/mobilier" className={activeLink} >
                                    Mobilier
                                </NavLink>
                            </li>
                            <li className="li__side-nav">
                                <NavLink to="/apropos" className={activeLink} >
                                    A propos
                                </NavLink>
                            </li>
                            <li className="li__side-nav">
                                <NavLink to="/contact" className={activeLink} >
                                    Contact
                                </NavLink>
                            </li>
                            {!isLogged ?
                                <li className="li__side-nav">
                                    <Link to="/login">
                                        Connexion
                                    </Link>
                                </li>
                                :
                                <>
                                    {role === 'admin' ?
                                        <li className='navlink li__side-nav'>
                                            <NavLink to="/back-projets" className={activeLink} >
                                                Backoffice
                                            </NavLink>
                                        </li>
                                        :
                                        null
                                    }
                                    <li className="li__side-nav">
                                        <Link to="/profile">
                                            <i className="black-text material-icons personn__side-nav">person</i>
                                        </Link>
                                    </li>
                                    <button
                                        className="btn-flat"
                                        onClick={() => {
                                            dispatch(
                                                actionLogout(),
                                            );
                                        }}
                                    >
                                        <i className="black-text right material-icons login">exit_to_app</i>
                                    </button>
                                </>
                            }
                        </ul>
                        <span data-target="nav-mobile" className="sidenav-trigger "><i className="material-icons grey-text">menu</i></span>
                    </div>

                    <div className="col l4 s12 logoInsta hide-on-med-and-down">
                        <a href='https://www.instagram.com/lepetitchineur/?igshid=YmMyMTA2M2Y%3D' target="blank"><img alt='LogoRC' className='insta' src={logoInsta} /></a>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Header;