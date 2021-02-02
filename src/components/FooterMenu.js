import React from "react";
import ColorbtnMobile from "./ColorbtnMobile";


const FooterMenu = ({ styles }) => {

  return (
    <div id="footer"
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundColor: "#333",
        color: "#fff",
        position: "fixed",
        bottom: 0
      }}
    >
  
          <div
            
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <ColorbtnMobile/>
          </div>
      
    </div>
  );
};

export default FooterMenu;
