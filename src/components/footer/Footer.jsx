import React from 'react'
import './footer.css'
import SocialIcons from "../socialicons/SocialIcons";



const Footer = () => {
  return (
      <footer>
          <div class="footer">
              <div class="inner-header flex">
                  <div className="logo">
                      <SocialIcons position="footer__socialicons" />
                      <div className="footer__copyright">
                          <small>
                              &copy; {new Date().getFullYear()} IamYinka.
                              Powered by{" "}
                              <a href="https://www.sanity.io">Sanity.io.</a>
                          </small>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
}

export default Footer