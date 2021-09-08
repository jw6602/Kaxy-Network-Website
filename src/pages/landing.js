import React, { useEffect } from "react";
import Nav from "../components/nav";
import Mobnav from "../components/mobnav";
import Hero from "../components/hero";
import About from "../components/about";
import Product from "../components/products";
import Faq from "../components/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Rellax from "rellax";
import "./landing.scoped.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Landing() {
  useEffect(() => {
    new Rellax(".bubble", {
      speed: -7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: true,
    });
  }, []);

  return (
    <div className="landing">
      <ToastContainer />
      <div className="main rellax">
        <div className="bg">
          <div className="bubble rellax" />
          <div className="bubble2" />
          <div className="bubble3" />
        </div>
        <Nav
          links={[
            { name: "Home", link: "#" },
            { name: "Products", link: "#product" },
            { name: "FAQ", link: "#faq" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        <Mobnav
          links={[
            { name: "Home", link: "#" },
            { name: "Products", link: "#product" },
            { name: "FAQ", link: "#faq" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        <Hero />
      </div>
      <About />
      <Product />
      <Faq />
      <Contact toast={toast} />
      <Footer />
    </div>
  );
}

export default Landing;
