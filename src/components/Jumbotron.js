import React from "react"


function Jumbotron() {
    return (
      <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="jumbotron"
      >
        <h1 className="text-white pt-5 jumboTitle">Employee Search</h1>
        <h3 className="text-white pt-5 jumboText">Find Employees of Interest</h3>
      </div>
    );
  }
  export default Jumbotron;