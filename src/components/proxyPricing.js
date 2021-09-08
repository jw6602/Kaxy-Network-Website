import { useState, useEffect } from "react";
import "./proxyPricing.scoped.css";
import ProxyPrcingBox from "./proxyPricingBox";
import axios from "axios";
import Config from "./../Config";

function ProxyPricing() {
  const [proxies, updateProxies] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await axios.get(Config.api.residential_isp_proxies);

      updateProxies(response.data);
    })();
  }, []);

  return (
    <div className="container" id="product">
      <div className="header">Pricing</div>
      <div className="proxy-pricing-grid">
        {proxies.map((k) => (
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

export default ProxyPricing;
