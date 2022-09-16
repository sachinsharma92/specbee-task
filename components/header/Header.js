import React from 'react';
import ButtonPrimary from '../buttonPrimary/ButtonPrimary';


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg header-style">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="../../static/logo/logo.svg" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our Progress</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">FAQ</a>
            </li>
          </ul>
          <div className="action-sec">
            <ButtonPrimary title="Join today" iconRight />
          </div>
        </div>
      </div>
    </nav>
  )
}
