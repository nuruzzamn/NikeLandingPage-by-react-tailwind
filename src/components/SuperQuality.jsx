import React from "react";
import Button from "./Button/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <div id="about-us" className="lg:py-20 py-10 max-container max-sm:mt-0 flex justify-center items-center max-lg:block max-sm:w-full">
      <section className="flex flex-col flex-1 justify-start gap-5 lg:mt-[-50px] ">
        <h2 className="text-4xl font-semibold py-[-10px] ">
          We Provide You <br className="max-lg:block hidden" />{" "}
          <span className="font-palanquin text-coral-red">
            {" "}
            Super <br className="max-lg:hidden block" /> Quality{" "}
          </span>
          Shoes{" "}
        </h2>
        <p className="font-montserrat text-xl leading-normal text-gray-500 mt-2 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="font-montserrat text-xl leading-normal text-gray-500 mt-2 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <section className="mt-8 ">
          <Button label={"View details"} />
        </section>
      </section>

      <section className="flex flex-1 max-lg:mt-16">
        <img src={shoe8} alt="" />
      </section>
    </div>
  );
};

export default SuperQuality;
