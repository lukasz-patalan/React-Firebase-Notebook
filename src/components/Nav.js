import React from "react"
import { NavLink } from "react-router-dom"
import "../css/nav.css"
import document from "../img/document.png"

const Nav = (props) => {
    return <div className="nav">
        <img alt="logo" src={document} />
        {props.user ? null : <p><NavLink to="/login">Login</NavLink></p>}
        <p><NavLink to="/" exact>Start</NavLink></p>
        {props.user ? <p onClick={props.logout}><NavLink to='/'>Logout</NavLink></p> : null}

    </div>
}

export default Nav;