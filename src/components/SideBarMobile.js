import React from "react";
import Objectif from './Objectif';

const Sidebar = ( ) => {
  const sidebarStyle = {
    height: "0vh",
    width:"200px",
    
    position: "none",
    paddingTop: 40
  };

 

  return (
    <div style={sidebarStyle}>
        <div className="App-header"> 
         <Objectif />
        </div>
        
     </div>
   
  );
};

export default Sidebar;