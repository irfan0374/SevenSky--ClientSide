import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-gradient-to-t from-gray-900 to-gray=400 text-white">
        <div>
          <img
            className="h-14 w-auto"
            src="/src/assets/Seven_Sky.png"
            alt="Logo"
          />
        </div>
        <nav>
          <header className="footer-title text-gray-900">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-gray-900">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-gray-900">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
