import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap lg:gap-12 gap-9">
      {services &&
        services.map((service, index) => {
          return <ServiceCard key={index} {...service} />;
        })}
    </div>
  );
};

export default Services;
