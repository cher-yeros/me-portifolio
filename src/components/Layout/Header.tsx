"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Header() {
  const path = usePathname();

  // on("click", ".mobile-nav-toggle", function (e) {
  //   select("#navbar").classList.toggle("navbar-mobile");
  //   this.classList.toggle("bi-list");
  //   this.classList.toggle("bi-x");
  // });

  const handleNavToggle = (e: any) => {
    // select("#navbar").classList.toggle("navbar-mobile");
    // e.classList.toggle("bi-list");
    // e.classList.toggle("bi-x");
  };

  const onscroll = (el: any, listener: any) => {
    el.addEventListener("scroll", listener);
  };

  useEffect(() => {
    let navbarlinks = document.querySelectorAll("#navbar .scrollto");

    navbarlinksActive();

    // window.addEventListener("load", navbarlinksActive);
    // onscroll(document, navbarlinksActive);
  }, []);
  const navbarlinksActive = () => {
    let navbarlinks = document.querySelectorAll("#navbar .scrollto");

    let position = window.scrollY + 200;

    navbarlinks.forEach((navbarlink) => {
      // console.log(navbarlink);

      console.log({ path });
      let section = document.querySelector(navbarlink.className);

      // console.log(section);

      // if (!navbarlink.hash) return;
      // let section = document.querySelector(navbarlink.hash);
      // if (!section) return;

      // if (
      //   position >= section.offsetTop &&
      //   position <= section.offsetTop + section.offsetHeight
      // ) {
      //   navbarlink.classList.add("active");
      // } else {
      //   navbarlink.classList.remove("active");
      // }
    });
  };
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="index.html">MAN</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo  */}
        {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            {/* <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li> */}
            {/* <li>
              <a className="nav-link scrollto " href="#portfolio">
                Portfolio
              </a>
            </li> */}
            {/* <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li> */}

            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/podcast">
                Podcast
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/restourant">
                Our Restourant
              </Link>
            </li>
          </ul>
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={handleNavToggle}
          ></i>
        </nav>
      </div>
    </header>
  );
}
