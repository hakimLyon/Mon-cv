import React from 'react';
import Objectif from './Objectif'
import ColorButton from './ColorButton';
import MenuItem from './MenuItem';


const Sidebar = ({ styles }) => {
  const sidebarStyle = {
    height:"auto",
    width: styles.sidebarWidth,
    display:"flex",
    paddingTop:4,
    
  };

  const menuItemStyle = {
  
    display:'flex',
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start", 
    alignItems: "center",
    padding: `6px ${styles.sidebarCollapsed ? 0 : 22}px`,
    color: styles.white(0.9),
    marginTop:79
      }

  
  const teste ={
   display: "flex",
   justifyContent:'center',
   alignItems: "center",
   marginLeft:254,
  
  
     
    

  }
  const separateur ={
  height:11,
  width:250,
  flexDirection:'1',
  backgroundColor:'white',
  display:'flex-end'
  

}
const Tete={
 marginTop:15,
}
  return (
    <div style={Tete} >
      <div style={separateur}>
      
      </div>
      
      
       <div style={teste} >
        <MenuItem/>
      </div>
      <div className="App-header">
    
     
      <div style={menuItemStyle} >
        <ColorButton />
      </div>

      <div style={sidebarStyle}>
        <Objectif />
      </div>
      

    </div>
    <div style={separateur}>

      </div>
    </div>
    
    
  );
};

export default Sidebar;
