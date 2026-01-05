import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import MenuOverlay from './MenuOverlay';
import "../styles/Navbar.scss"

const active = ({isPending, isActive})=>{
  return isPending ? "" : isActive ? "active" : ""
}

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      const nav = document.querySelector("nav");
      if (!nav) return;

      document.documentElement.style.setProperty(
        "--navHeight",
        `${nav.offsetHeight}px`
      );
    }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll >= 150 && lastScrollY < 150) {
        setScrolled(true);
      }

      if (currentScroll < 100 && lastScrollY >= 100) {
        setScrolled(false);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <nav className={'navBar'}>
        <h2 className="logo">David</h2>
        <div className="links">
            <NavLink to={"/"} className={active}>// Home</NavLink>
            <NavLink to={"/portfolio"} className={active}>// Portfolio</NavLink>
            <NavLink to={"/contact"} className={active}>// Contact</NavLink>
            <button
              className={`btn ${scrolled ? "down" : "up" }`}
              onClick={() => setMenuOpen(true)}
              aria-label='Open Menu'
            >
              <GiHamburgerMenu/>
            </button>
        </div>
      </nav>
      <MenuOverlay open={menuOpen} onClose={()=> setMenuOpen(false)}/>
    </>
  );
}
