import React, { useRef } from "react";
import "./header.css";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];
const Head = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <>
      <header className="header">
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <h2 className=" d-flex align-items-center gap-1">
                <p>
                  {" "}
                  <FontAwesomeIcon className="" icon={faLock} />
                  Academia
                </p>
              </h2>
            </div>

            <div className="nav d-flex align-items-center gap-5">
              <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav__list">
                  {navLinks.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav__right">
                <p className="mb-0 d-flex align-items-center gap-2">
                  <i class="ri-phone-line"></i> +88 0123456789
                </p>
              </div>
            </div>

            <div className="mobile__menu">
              <span>
                <FontAwesomeIcon icon={faPhone} onClick={menuToggle} />
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Head;
