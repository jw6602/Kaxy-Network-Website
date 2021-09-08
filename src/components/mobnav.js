import { useState } from "react";
import logo from "../assets/logo.svg";
import Buttons from "../components/button";

import { useHistory } from "react-router-dom";

function Mobnav(props) {
  const history = useHistory();
  const [active, setActive] = useState(false);
  return (
    <div className={`${active ? "navactive" : ""} mobnav flex sp-bw al-ce`}>
      <a
        href="#"
        className="logo flex sp-bw al-ce"
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={logo} alt="" />
      </a>
      <div
        className={`${
          active ? "is-active" : ""
        } hamburger hamburger--slider  js-hamburger`}
      >
        <div class="hamburger-box" onClick={() => setActive(!active)}>
          <div class="hamburger-inner" />
        </div>
      </div>
      <div className="mobnavlinks">
        {props.links.map((e) => (
          <a
            className={`${active ? "animateDown" : ""}`}
            href={e.link}
            onClick={() => setActive(false)}
          >
            {e.name}
          </a>
        ))}
        <Buttons
          text="Client Portal"
          onClick={() => {
            window.location = "https://client-portal.kaxynetwork.com/clientarea.php";
          }}
          className={`custom ${active ? "animateDown" : ""}`}
        />
      </div>
    </div>
  );
}

export default Mobnav;
