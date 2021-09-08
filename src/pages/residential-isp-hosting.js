import { useState, useEffect } from "react";
import Nav from "../components/nav";
import Mobnav from "../components/mobnav";
import Footer from "../components/footer";
import FeatureBoxes from "../components/features";
import Carriers from "../components/carriers";
import FrontPage from "../components/frontPage";
import ServerImg from "../assets/lock.png";
import HostingPricing from "../components/hostingPricing";
import _ from "lodash";
import axios from "axios";

import Config from "../Config";

function Server() {
  const [servers, updateServers] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await axios.get(Config.api.residential_isp_hosting);
      updateServers(response.data);
    })();
  }, []);
  return (
    <div className="server">
      <Nav
        links={[
          { name: "Home", link: "/" },
          { name: "Pricing", link: "#product" },
          { name: "Connectivity", link: "#connectivity" },
          { name: "Features", link: "#features" },
        ]}
      />
      <Mobnav
        links={[
          { name: "Home", link: "/" },
          { name: "Pricing", link: "#product" },
          { name: "Connectivity", link: "#connectivity" },
          { name: "Features", link: "#features" },
        ]}
      />
      <FrontPage
        secText="Bring your own IP space to our network."
        primaryText="Residential ISP Hosting"
        imgSrc={ServerImg}
        href="#product"
      />
      {/*
      <ServerPricing servers={servers} />
      <div className="mob-only-pricing container">
        <div className="proxy-pricing-grid" style={{ marginTop: 0 }}>
          {servers.map((server, i) => (
            <ProxyPrcingBox
              key={i}
              num={server.name}
              specs={Object.values(
                _.pick(server, ["core", "memory", "storage", "speed"])
              )}
              plans={server.plans}
              family="Server"
              currency="$"
              type="USD"
            />
          ))}
          // <ProxyPrcingBox
          //   num="/24"
          //   specs={[
          //     "Lorem ipsum dolor",
          //     "Lorem ipsum dolor",
          //     "Lorem ipsum dolor",
          //     "Lorem ipsum dolor",
          //     "Lorem ipsum dolor",
          //   ]}
          //   currency="$"
          //   price="30"
          //   type="USD"
          // />
          <ProxyPrcingBox
            nostock="nostock"
            num="/24"
            specs={[
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
            ]}
            currency="$"
            price="30"
            type="USD"
          />
          <ProxyPrcingBox
            num="/24"
            specs={[
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
            ]}
            currency="$"
            price="30"
            type="USD"
          />
          <ProxyPrcingBox
            nostock="nostock"
            num="/24"
            specs={[
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
            ]}
            currency="$"
            price="30"
            type="USD"
          /> 
        </div>
      </div>
      */}
      <HostingPricing />
      <Carriers />
      <FeatureBoxes />
      <Footer />
    </div>
  );
}

export default Server;
