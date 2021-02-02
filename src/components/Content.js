import React from "react";
import Page from "./Page";

const Content = ({ styles }) => {
  const { showSidebar } = styles;

  const contentStyle = {
    paddingTop: showSidebar ? 67 : styles.topBarHeight + 20,
    paddingRight:'auto',
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? styles.sidebarWidth + 1 : 20,
    
    position:'absolute',
    color:styles.white(),
    marginRight:1,
    marginLeft:25,
   

  };


  return (
    <div>
    
      <div  >
     <Page/>
    </div>
    </div>
    
  );
};

export default Content;
