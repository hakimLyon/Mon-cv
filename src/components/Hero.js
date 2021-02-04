import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import Typical from 'react-typical';
import tof from '../profile.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Hero (){
    const [animated, setAnimated] = useState(false);
    useEffect(()=>{
        setAnimated(true);
    },[])
    return(
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <LazyLoadImage src={tof} effect="blur" className=" pointer-events-none animate-float rounded-full w-44 h-44 bg-white shadow-2xl flex items-center p-5 justify-center m-2 "/>
            <Typical
            steps={["Bienvenu", 2000, "dans mon app", 2000]}
            loop={Infinity}
            className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black mb-14"
            />
        <h1 className={`${animated ? '':"translate-y-10 opacity-0"} transform transition duration-2000 ease-in-out lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14`}>
            
            <span >CURRICULUM VITAE</span>
            
        </h1>
        <Link to="/imprimer" className="boutton-p">
            Telecharger le cv
         <FaIcons.FaDownload className="ml-4 animate-bounce"/>
        </Link>

    </div>
    )
    
    
}
export default Hero;