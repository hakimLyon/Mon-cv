import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
const Hero =()=>{
    return(
        <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
            CURRICULUM VITAE
        </h1>
        <Link to="/imprimer" className="boutton-p">
            Telecharger le cv
         <FaIcons.FaDownload className="ml-4 animate-bounce"/>
        </Link>

    </div>
    )
    
    
}
export default Hero;