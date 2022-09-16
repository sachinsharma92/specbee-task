import React from 'react';

export default function Footer() {
  return (
    <footer className="footer footer-style">
      <div className="container">

        <div className="row">
          <div className="col-sm-8">
            <div className="left-section">
              <div className="copyright">
                © 2022 Lorem ipsum dolor
              </div>
              <ul className="footer-nav">
                <li className="footer-item">
                  <a className="footer-link" href="#">Privacy Policy</a>
                </li>
                <li className="footer-item">
                  <a className="footer-link" href="#">Cookies Policy</a>
                </li>
                <li className="footer-item">
                  <a className="footer-link" href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <ul className='social-icons'>
              <li className='social-item'><a href='#' className='social-link'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li className='social-item'><a href='#' className='social-link'><i class="fa-brands fa-linkedin-in"></i></a></li>
              <li className='social-item'><a href='#' className='social-link'><i class="fa-brands fa-instagram"></i></a></li>
              <li className='social-item'><a href='#' className='social-link'><i class="fa-brands fa-youtube"></i></a></li>
              <li className='social-item'><a href='#' className='social-link'><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
