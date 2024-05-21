import { Link } from "react-router-dom";
import "./Header.scss";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // Added background to header from the point where it overlays page content
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const targetElement = document.querySelector(".header");
      const threshold = 125;

      if (targetElement) {
        if (scrollPosition > threshold) {
          targetElement.classList.add("scrolled-past-threshold");
        } else {
          targetElement.classList.remove("scrolled-past-threshold");
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link className="logo" to={"/"}>
            <img src="/icons/logo.svg" alt="Logo" />
          </Link>
          <nav className="navbar">
            <Link className="navbar__item" to={"/movies"}>
              Movies
            </Link>
            <Link className="navbar__item" to={"/tv-shows"}>
              TV Shows
            </Link>
            <Link className="navbar__item suggest" to={"/suggest-me"}>
              Suggest me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
