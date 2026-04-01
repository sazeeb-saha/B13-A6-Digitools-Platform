import React from "react";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Simple, Transparent Pricing</h1>
          <p>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div>
          <div>
            <h2>Starter</h2>
            <p>Perfect for getting started</p>
          </div>
          <div>
            <h2>$0</h2>
            <p>Month</p>
          </div>
          <div>
            <ul>
              <li>
                <FaCheck className="text-green-500 font-bold" />
                Access to 10 free tools
              </li>
              <li>
                <FaCheck className="text-green-500 font-bold" />
                Basic templates
              </li>
              <li>
                <FaCheck className="text-green-500 font-bold" />
                Community support
              </li>
              <li>
                <FaCheck className="text-green-500 font-bold" />1 project per
                month
              </li>
            </ul>
          </div>
          <button>Get Started Free</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
