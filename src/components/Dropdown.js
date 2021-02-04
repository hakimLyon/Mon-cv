import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({IsOpen, toggle}) => {
    return (
        <div className={IsOpen ? 'transform  duration-300 ease-in-out grid grid-rows-4 text-center items-center bg-yellow-500': "hidden"}
          onClick={toggle}
        >
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
    )
}

export default Dropdown
