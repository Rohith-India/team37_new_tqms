import React from "react";
import logo from "./logo512.png";
import "./App.css";
function header(){
    return(
    <header className='App-header'>
        <img src={logo} alt = "logo" height={100} width={100}/>
        <h1 className="title">TENDER & QUOTATION MANAGEMENT SYSTEM</h1>
    </header>
    );
}
export default header;