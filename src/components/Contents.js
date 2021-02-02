import React from 'react'
import ImageOne from './images/20201101_125735.jpg';
import ImageTwo from './images/20201101_130040.jpg';

const Contents = () => {
    return (
        <div className="hidden">
        <div className="menu-card">
            <img src={ImageOne} alt="jacket" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Jacket</h2>
                <p className="mb-2">Cet jacket est un excellent jacket moderne et est faites pour vous</p>
                <span>20000 Fcfa</span>
            </div>
        </div>

       <div className="menu-card">
            <img src={ImageTwo} alt="jacket" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Jacket</h2>
                <p className="mb-2">Cet jacket est un excellent jacket moderne et est faites pour vous</p>
                <span>20000 Fcfa</span>
            </div>
        </div>
        </div>
    )
}

export default Contents;
