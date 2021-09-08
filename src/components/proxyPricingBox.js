import { useState } from "react";
import "./proxyPricingBox.scoped.css";
import "antd/dist/antd.css";
import { Select } from "antd";
import Buttons from "../components/button";
import { fromPairs } from "lodash";
const { Option } = Select;
function ProxyPricingBox(props) {
  const [selectedPack, updateSelected] = useState(props.plans[0]);

  return (
    <div className={`proxy-pricing-box ${props.nostock}`}>
      <div className="subnet">
        <div>{props.family || "Subnet"}</div>
        <div className="num">{props.num}</div>
      </div>
      <div className="padding-section">
        <div className="specs">
          {props.specs.map((e) => (
            <div className="spec">
              <div className="dot" />
              {e}
            </div>
          ))}
        </div>
        <div className="price">
          <span className="currency">{props.currency}</span>
          <span className="price-num">{selectedPack.cost.split("$")[1]}</span>
          <span className="type">{props.type}</span>
        </div>

        <div className="select">
          <Select
            defaultValue={0}
            onSelect={(value) => {
              updateSelected(props.plans[value]);
            }}
          >
            {props.plans.map((k, i) => (
              <Option key={i} value={i}>
                {k.time || k.carrier}
              </Option>
            ))}
          </Select>
        </div>

        <Buttons
          text="Purchase"
          disabled={!selectedPack.stock ? true : false}
          className={!selectedPack.stock ? "no-stock" : ""}
          onClick={() => {
            window.location = selectedPack.purchaseLink;
          }}
        />
      </div>
    </div>
  );
}

export default ProxyPricingBox;
