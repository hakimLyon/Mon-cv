import React from "react";
import SideBarMobile from './SideBarMobile';
import PageMobile from './PageMobile';

const Content = ({ styles }) => {

  const { showSidebar } = styles;

 

  const contentStyle = {
    paddingTop: showSidebar ? 20 : styles.topBarHeight - 100,
    paddingRight: 6,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 200,
    paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 200,
    color:styles.white(),
    
    
    
    
  };

  return (
     
    <div >

      <div >
        <SideBarMobile/>
      </div>

      <div id="contentM" style={contentStyle} >
        <PageMobile/>
      </div>

    </div>
      
  );
};

export default Content;
