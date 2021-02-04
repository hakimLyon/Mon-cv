import React from 'react';
import Profile from '../Profile';
import ImprimerCV from './ImprimerCV';


const Down = (props) => {
    return (
        <>
        <div className="bg-white h-screen flex flex-col justify-center items-center">
             <center className=" animate-pulse lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 ">Cette page est en construction!!!</center>
        </div>
       
        <div className="hidden flex justify-center bg-white h-screnn ">
            <Profile/>
            <ImprimerCV />
        </div>
        </>
    )
}

export default Down
