/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState, useEffect} from 'react';


import './App.css';
import './Semantic/components/button.css';
import './Semantic/components/header.css';
import'./Semantic/components/image.css';
import './Semantic/components/container.min.css';
import './Semantic/components/menu.min.css';

import NavBar from './components/NavBar';

import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Accueil from './components/pages';
import Experience from './components/pages/Experience';
import Competences from './components/pages/Competences';
import Diplomes from './components/pages/Diplomes'
import Certificat from './components/pages/Certificat'
import Dropdown from './components/Dropdown';
import Down from './components/pages/Down';


function App() {
   
    const [IsOpen, setIsOpen ] = useState(false);

    const toggle = ()=>{
      setIsOpen(!IsOpen)
    }

    useEffect(() => {
      const hideMenu =()=>{
        if(window.innerWidth > 768 && IsOpen){
          setIsOpen(false)
          
        }
      }
      window.addEventListener('resize', hideMenu)
      return()=> {
        window.removeEventListener('resize', hideMenu)
      }
    })
    
    return(
      <>
        <NavBar toggle={toggle}/>
        <Dropdown IsOpen={IsOpen} toggle={toggle}/>
        <Switch>
          <Route path="/" exact component={Accueil}></Route>
          <Route path="/experiences" component={Experience}></Route>
          <Route path="/diplomes" component={Diplomes}></Route>
          <Route path="/competences" component={Competences}></Route>
          <Route path="/certifications-et-cours" component={Certificat}></Route>
          <Route path="/imprimer" component={Down}></Route>
        </Switch>
        <Footer/>
     </>
    )
  }


export default App;
