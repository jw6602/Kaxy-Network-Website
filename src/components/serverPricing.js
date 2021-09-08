import ServerPack from "../components/serverPack";
import "./serverPricing.scoped.css";

function ServerPricing({ servers }) {
  return (
    <div className="server-pricings" id="product">
      <div className="container">
        <div className="header">Pricing</div>
        <div className="server-pricing">
          <div className="server-headers">
            <div>CPU</div>
            <div>Memory</div>
            <div>Storage</div>
            <div>Network</div>
            <div>Availability</div>
            <div />
          </div>
          <div className="server-pricing-items">
            {servers.map((server, i) => (
              <ServerPack key={i} {...server} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerPricing;
