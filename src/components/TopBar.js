import React from "react";


const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "#fff",
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div id="topbar" style={topBarStyle}>
      
      <span>{`😺️`}</span>
      <h3>CURRICULUM VITAE</h3>
      <span>{`⚙️`}</span>
    </div>
  );
};

export default TopBar;
