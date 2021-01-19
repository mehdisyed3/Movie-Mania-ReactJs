import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
      <div className="footer__container">
        <p>
        © 2021 Syed Mehdi.{" "}
          <a
            href="https://github.com/mehdisyed3/Movie-Mania"
            target="_blank"
          >
            Click
          </a>{" "}
          for source codes.
        </p>
      </div>
    </div>
    )
}

export default Footer