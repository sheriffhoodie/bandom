import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Follow me for more!
      </p>
      <a href="http://github.com/sheriffhoodie" target="_blank">
        <i className="icon fa fa-github-square fa-3x" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/" target="_blank">
        <i className="icon fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
      </a>
      <a href="https://angel.co/maxwell-currier" target="_blank">
        <i className="icon fa fa-angellist fa-3x" aria-hidden="true"></i>
      </a>
    </footer>
  );
};

export default Footer;
