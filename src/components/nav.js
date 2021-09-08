import logo from "../assets/logo.svg";
import "./nav.scoped.css";
import Buttons from "../components/button";

import { useHistory } from "react-router-dom";

function Nav(props) {
  const history = useHistory();
  return (
    <div className="container nav flex sp-bw al-ce">
      <a
        href="#"
        className="logo flex sp-bw al-ce"
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={logo} alt="" />
        <span>Kaxy Network</span>
      </a>
      <div className="links">
        {props.links.map((e, i) => (
          <a href={e.link} index={i}>
            {e.name}
          </a>
        ))}
        <Buttons
          text="Client Portal"
          className="custom"
          onClick={() => {
            window.location = "https://client-portal.kaxynetwork.com/clientarea.php";
          }}
        />
      </div>
    </div>
  );
}

export default Nav;
