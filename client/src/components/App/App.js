/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { actionAxiosProjects } from '../../Redux/Actions/ProjetsActions';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Projets from '../Projets/Projets';
import DetailProjet from '../Projets/DetailProjet/DetailProjet';
import { actionDispatchStatus } from '../../Redux/Actions/BackProjectsActions';

import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error404 from '../Error404/Error404';
import Error403 from '../Error403/Error403';

import BackProjets from '../BackOffice/BackProjets/BackProjets';
// import BackMobilier from '../BackOffice/BackMobilier/BackMobilier';
import BackAdministration from '../BackOffice/BackAdministration/BackAdministration';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackAddProjet from '../BackOffice/BackProjets/BackAddProjet/BackAddProjet';
import Profile from '../Profile/Profile';
import Furnitures from '../Furnitures/Furnitures';
import { actionAxiosFurnitures } from '../../Redux/Actions/FurnituresActions';
import FurnituresContact from '../Furnitures/FurnituresContact/FurnituresContact';
import FurnitureDetail from '../Furnitures/FurnitureDetail/FurnitureDetail';
import BackUpdateProjet from '../BackOffice/BackProjets/BackUpdateProjet/BackUpdateProjet';
import BackMobilier from '../BackOffice/BackMobilier/BackMobilier';

const App = () => {

  // Dispatch allow us to trigger action from 'redux action' folder
  const dispatch = useDispatch();

  // console.log(location)

  // Effect active on page load
  useEffect(() => {
    dispatch(actionAxiosFurnitures())
    dispatch(actionAxiosProjects());
    dispatch(actionDispatchStatus());    
  }, []);

  const isLogged = useSelector((state) => state.UserReducer.isLogged);
  // console.log('loggé ? ', isLogged);
  const role = useSelector((state) => state.UserReducer.role);
  // console.log('role ? ', role);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Projets />} />
        <Route exact path="/projet/:slug" element={<DetailProjet />} />
        <Route exact path="/mobilier" element={<Furnitures/>} />
        <Route exact path="/mobilier/:slug" element={<FurnitureDetail/>} />
        <Route exact path="/contact/mobilier/:slug" element={<FurnituresContact/>} />
        <Route path="/mobilier" element={<Furnitures />} />
        <Route exact path="/apropos" element={<About />} />
        <Route exact path="/contact" element={<Contact isLogged={isLogged} />} />
        <Route exact path="/back-projets/addProject" element={role === 'admin' ? <BackAddProjet /> : <Error403 />} />
        <Route exact path="/back-projets/updateProject/:slug" element={role === 'admin' ? <BackUpdateProjet /> : <Error403 />} />
        <Route exact path="/back-projets" element={role === 'admin' ? <BackProjets /> : <Error403 />} />
        <Route exact path="/back-admin" element={role === 'admin' ? <BackAdministration /> : <Error403 />} />
        <Route path="/back-mobilier" element={role === 'admin' ? <BackMobilier /> : <Error403 />} />
        {/* <Route exact path="/back-projets" element={<BackProjets />} /> */}
        {/* <Route path="/back-mobilier" element={ <BackMobilier />} /> */}
        {/* <Route exact path="/back-admin" element={ <BackAdministration /> } /> */}
        {/* <Route exact path="/back-projets/addProject" element={ <BackAddProjet /> } /> */}
        <Route exact path="/login" element={isLogged && role === 'admin' ? <BackAdministration /> : <Login />} />
        <Route exact path="/register" element={isLogged ? <Projets /> : <Register />} />
        <Route exact path="/profile" element={isLogged ? <Profile /> : <Login/>} />
        <Route exact path="/403" element={<Error403 />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
