import React from "react"
import '../Styles/Header.css'

export default function Header() {
    return(
        <header className="header">

            <img src="../images/Trollface.png" alt=""
              className="head-logo"/>

            <h2 className="header-title">Header Section</h2>
            <h4 className="header-cor">React Project-Daily Memes</h4>
            
        </header>
    )
}