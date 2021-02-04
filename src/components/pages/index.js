import React from 'react';
import Contents from '../Contents';
import Hero from '../Hero';
import Certificat from './Certificat';
import Competences from './Competences';
import Diplomes from './Diplomes';
import Experience from './Experience';


const Accueil = () => {
    return (
        <>
           <Hero/>
           <Experience/>
           <Diplomes/>
           <Competences/>
           <Certificat/>
           <Contents/>
        </>
    )
}

export default Accueil;
