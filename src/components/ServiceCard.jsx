import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div>
      <section className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-10">
        <section className="w-11 h-11 flex justify-center rounded-full bg-coral-red items-center">
          <img src={imgURL} alt="img" width={30} height={30} />
        </section>

        <h3 className="text-2xl font-bold mt-6 font-montserrat leading-normal">
          {label}
        </h3>
        <p className="text-xl font-palanquin text-gray-500 mt-2 leading-normal break-words">
          {subtext}
        </p>
      </section>
    </div>
  );
};

export default ServiceCard;
