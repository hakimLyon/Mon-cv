import React from 'react';

import * as FaIcons from 'react-icons/fa'

const Competences =(props)=>{
    return(
    <div className="justify-center items-center h-screen bg-red-400 opacity-95">
      
        <h3 className="titles">Competences</h3>
  
      <div className="ml-3"  >
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/>Administration de bureau</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/>Résolution des problèmes informatiques</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> Ventes en Lignes</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> Création de site Web</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> Configuration de réseau CISCO</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> React Native</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> React.js</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> Wordpress</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> GitHub</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> HTML, JavaScript</p>
        <p className="flex justify-start items-center"><FaIcons.FaStar className="mr-2"/> Adaptation aux nouvelles technologies</p>
      </div>
    </div>
  )
}

export default Competences;