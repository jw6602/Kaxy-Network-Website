import { useState, useEffect } from "react";
import "./proxyPricing.scoped.css";
import ProxyPrcingBox from "./proxyPricingBox";
import axios from "axios";
import Config from "./../Config";

function HostingPricing() {
  const [hosting, updateHosting] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await axios.get(Config.api.residential_isp_hosting);

      updateHosting(response.data);
    })();
  }, []);

  return (
    <div className="container" id="product">
      <div className="header">Pricing</div>
      <div className="proxy-pricing-grid">
        {hosting.map((k) => (
          <ProxyPrcingBox
            num={k.cidr}
            specs={k.specs}
            plans={k.plans}
            currency="$"
            price="30"
            type="USD"
          />
        ))}
      </div>
    </div>
  );
}

export default HostingPricing;
