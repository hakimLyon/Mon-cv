import React from 'react'
import { Link } from 'react-router-dom' 
import * as FaIcons from 'react-icons/fa'
const NavBar =()=>{
 return (
    <nav className="flex justify-between items-center h-16 w-auto bg-white text-black relative shadow-sm font-lato" role="navigation"> 
        <Link to="/" className="pl-8 flex items-center uppercase font-black">Mon Cv<FaIcons.FaUserGraduate className="ml-3"/></Link>
        <div className="px-4 cursor-pointer md:hidden">
            <FaIcons.FaBars/>
        </div>
        <div className="pr-8  md:block hidden">
            <Link className="p-4 " to="/">
                Accueil
                </Link>
            <Link className="p-4 transition-all duration-200 ease-linear hover:bg-yellow-300 opacity-70 rounded-md  focus:ring-2 " to="/experiences">
                Experiences
                </Link>
            <Link className="p-4 hover:bg-green-400 transition duration-200 ease-linear opacity-70 focus-within:ring-2 rounded-md  " to="/diplomes">
                Diplomes
                </Link>
            <Link className="p-4 transition-all duration-200 ease-linear hover:bg-red-300 opacity-70 rounded-md  focus:ring-2" to="/competences">
                Competences
                </Link>
            <Link className="p-4 transition-all duration-200 ease-linear hover:bg-pink-300 opacity-70 rounded-md  focus:ring-2" to="/certifications-et-cours">
                Certificats & Cours
                </Link>
        </div>
    </nav>
    )
}

export default  NavBar;