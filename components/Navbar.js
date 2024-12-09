import React, { useState, useEffect } from 'react'
import { Link as ReactScrollLink} from 'react-scroll';
import Link from 'next/link';
import { motion } from "framer-motion";

const Navbar = () => {
  const [hasScroll, setHasScroll] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setHasScroll(document.documentElement.scrollTop > 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => setHasScroll(document.documentElement.scrollTop > 100));

    return _ => {
      window.removeEventListener('scroll', () => setHasScroll(document.documentElement.scrollTop > 100));
    }
  }, [setHasScroll])

  const handleHamburgerClick = () => {
    mobileNavOpen ? document.body.classList.remove('blur') : document.body.classList.add('blur');
    setMobileNavOpen(!mobileNavOpen);
  }

  return (
    <>
      <header className={`header ${hasScroll ? 'scrolled' : ''}`}>
        <div className="left-side">
          <Link
            href={`/`}
            passHref
          >
            <h1 className="nav-title">Rodrigo Nascimento Machado</h1>
          </Link>
        </div>
          <div className="right-side">
            <ReactScrollLink activeClass="active" to="main" spy={true} smooth={true} offset={-125}>Início</ReactScrollLink>
            <ReactScrollLink to="about" spy={true} smooth={true} offset={-125}>Sobre</ReactScrollLink>
            <ReactScrollLink to="projects" spy={true} smooth={true} offset={-125}>Projetos</ReactScrollLink>\
            <a href="/rodrigoCV89-PT-BR.pdf" className="resume-link">Currículo</a>
        </div>
      </header>
      <div className="mobile-header">
        <div>
          <button aria-label="Menu" className={`${mobileNavOpen ? 'close-button' : 'hamburger-button'}`} onClick={() => handleHamburgerClick()}>
            <div className="ham-box">
              <div className="ham-box-inner"></div>
            </div>
          </button>
          <aside aria-hidden="true" tabIndex="-1" className={`${mobileNavOpen ? 'side-bar-open' : 'side-bar'}`}>
            <nav>
              <ol>
                <li>
                  <ReactScrollLink activeClass="active" to="main" spy={true} smooth={true} offset={-125} onClick={() => handleHamburgerClick()}>Início</ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink to="about" spy={true} smooth={true} offset={-125} onClick={() => handleHamburgerClick()}>Sobre</ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink to="projects" spy={true} smooth={true} offset={-125} onClick={() => handleHamburgerClick()}>Projetos</ReactScrollLink>
                </li>
              </ol>
              <a href="/rodrigoCV89-PT-BR.pdf" className="resume-link">Currículo</a>
            </nav>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Navbar;