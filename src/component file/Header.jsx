import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState("");
  const [sideNav, setSideNav] = useState(false);
  const [show, setShow] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScrolled("head");
        setShow("block");
      } else {
        setScrolled("");
        setShow("");
      }
    });
  });

  return (
    <>
      <svg
        className="arrow-up"
        style={{ display: show }}
        onClick={() =>
          scroll({
            top: 0,
            behavior: "smooth",
          })
        }
        xmlns="http://www.w3.org/2000/svg"
        height="135px"
        version="1.1"
        viewBox="0 0 1080 1080"
      >
        <path
          fill="#e88724 "
          className="st0"
          d="M525.1,479.8l-14.9-8.7c-6.4-3.7-14.4.9-14.4,8.4v237.8c0,5.3,4.3,9.7,9.6,9.7h69.1c5.3,0,9.6-4.3,9.6-9.7v-83.4c0-7.4,8-12.1,14.4-8.4l71.5,41.7c4.6,2.7,10.4,1.1,13.1-3.5l34.6-60.5c2.6-4.6,1.1-10.5-3.5-13.2l-56.6-33-58.5-34.1-29.8-17.4-14.4-8.4-29.8-17.4ZM525.1,687.8v-157.1c0-7.4,8-12.1,14.4-8.4l30.3,17.7,29.2,17.1,29.2,17,45.9,26.8c4.6,2.7,6.1,8.6,3.5,13.2l-5.3,9.3c-2.6,4.6-8.5,6.2-13.1,3.5l-60.8-35.5-29.2-17.1h0c-6.4-3.7-14.4.9-14.4,8.4v105c0,5.3-4.3,9.7-9.6,9.7h-10.6c-5.3,0-9.6-4.3-9.6-9.7Z"
        />
      </svg>
      <header className={scrolled}>
        <a href="#" aria-label="blue arrows logo">
          <img src="imgs/logo.png" alt="blue-arrows-logo" />
        </a>
        <nav className="main-nav">
          <ul>
            <li className="hide-in-mobile">
              <a href="#about">About</a>
            </li>
            <li className="hide-in-mobile">
              <a href="#services">Services</a>
            </li>
            <li className="hide-in-mobile">
              <a href="#projects">Projects</a>
            </li>
            <li className="hide-in-mobile">
              <a href="#contact">Contact</a>
            </li>
            <li></li>
          </ul>
        </nav>
        <svg
          onClick={() => setSideNav(!sideNav)}
          className="burger-menu"
          id="fill"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>

        <nav
          className="side-nav"
          style={{ display: sideNav ? "flex" : "none" }}
        >
          <ul>
            <svg
              onClick={() => setSideNav("")}
              // onClick={closeSideNav}
              className="close"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <li className="show-in-mobile">
              <a href="#about">About</a>
            </li>
            <li className="show-in-mobile">
              <a href="#services">Services</a>
            </li>
            <li className="show-in-mobile">
              <a href="#projects">Projects</a>
            </li>
            <li className="show-in-mobile">
              <a href="#contact">Contact</a>
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
