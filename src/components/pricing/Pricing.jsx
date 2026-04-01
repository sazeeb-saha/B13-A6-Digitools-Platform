import React from "react";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="mb-20 ">
      <div className="">
        <div className="text-center space-y-4 w-11/12 mx-auto">
          <h1 className="text-5xl font font-extrabold">
            Simple, Transparent Pricing
          </h1>
          <p className="opacity-65">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 mt-8  container w-11/12 lg:w-8/12 mx-auto ">
          {/* card 1 */}
          <div className=" border  border-gray-200 rounded-2xl shadow-xl  p-6 h-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Starter</h2>
                <p className=" opacity-65">Perfect for getting started</p>
              </div>
              <div className="flex">
                <p className="text-4xl font-bold">$0</p>

                <div className="flex items-baseline-last  text-lg">
                  <p className=" opacity-65 ">/Month</p>
                </div>
              </div>
              <div>
                <ul>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 font-bold" />
                    Access to 10 free tools
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 font-bold" />
                    Basic templates
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 font-bold" />
                    Community support
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 font-bold" />1 project
                    per month
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn w-full mt-10 lg:mt-0 bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full text-white font-bold  ">
              Get Started Free
            </button>
          </div>
          {/* card 2 */}
          <div className="space-y-6 border  border-gray-200  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl shadow-xl text-white   p-6 relative">
            <div className="bg-amber-100 text-red-400 font-medium rounded-full w-fit px-3 py-1.5 absolute  -top-4.5 left-52 lg:left-37.5 border-0">
              <p>Most Popular</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pro</h2>
              <p className=" opacity-65">Best for professionals</p>
            </div>
            <div className="flex">
              <p className="text-4xl font-bold">$29</p>

              <div className="flex items-baseline-last  text-lg">
                <p className=" opacity-65 ">/Month</p>
              </div>
            </div>
            <div>
              <ul>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Access to all premium tools
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Unlimited templates
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Cloud sync
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Advanced analytics
                </li>
              </ul>
            </div>

            <button className="btn w-full bg-white rounded-full  font-bold mt-5  ">
              <p className="bg-linear-to-r  from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  ">
                Get Started Free
              </p>
            </button>
          </div>

          {/* card 3 */}
          <div className="space-y-6 border  border-gray-200 rounded-2xl shadow-xl  p-6">
            <div>
              <h2 className="text-2xl font-bold">Enterprise</h2>
              <p className=" opacity-65">For teams and businesses</p>
            </div>
            <div className="flex">
              <p className="text-4xl font-bold">$99</p>

              <div className="flex items-baseline-last  text-lg">
                <p className=" opacity-65 ">/Month</p>
              </div>
            </div>
            <div>
              <ul>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Team collaboration
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Custom integrations
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  SLA guarantee
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500 font-bold" />
                  Custom branding
                </li>
              </ul>
            </div>
            <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full text-white font-bold mt-5  ">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// bg-linear-to-r from-[#4F39F6] to-[#9514FA]  bg-clip-text text-transparent
