import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-green text-center md:text-left pb-24">
      <div className="max-w-screen-xl mx-auto p-16 text-white space-y-8 text-xs">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/logo.png"
            alt="OpenHouse.ai"
            width={180}
            height={180}
            className="md:pb-8"
          />
        </div>
        <p>
          The leading Builder Intelligence Platform for new home construction
        </p>
        <p>
          AI-Powered Search • Demand Forecasting Capabilities • Floor Plan
          Optimization • Deeper Customer Data
        </p>
      </div>
    </div>
  );
};

export default Footer;
