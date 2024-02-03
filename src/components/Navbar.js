import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-body-dark navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.Name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Text-Utils">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.Abt}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    Name: PropTypes.string,
    Abt: PropTypes.string
}

export default Navbar;