import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <a className="navbar-brand" href="/">FrontEnd-React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Store">Store</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Nav;