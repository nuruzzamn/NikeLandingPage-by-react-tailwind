import React from "react";
import arrowRight from "../assets/icons/arrow-right.svg";
import { offer } from "../assets/images";
import Button from "./Button/Button";

const SpecialOffer = () => {
  return (
    <div>
      <section className="max-container flex flex-wrap items-center max-xl:flex-col-reverse gap-10 lg:mt-16 mt-0">
        <section className="flex mt-16 lg:mt-0">
          <img src={offer} width={650} height={450} />
        </section>

        <section className="pl-0 pr-0 flex flex-col flex-1 justify-center items-start gap-5 ">
          <h2 className="text-4xl font-semibold py-[-10px] ">
            Special{" "}
            <span className="font-palanquin text-coral-red "> Offer </span>{" "}
          </h2>
          <p className="font-montserrat text-xl leading-normal text-gray-500 mt-2 pl-0 pr-0 ">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>

          <p className="font-montserrat text-xl leading-normal text-gray-500 mt-2 pl-0 pr-0 ">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>

          <section className="mt-8 flex gap-10 ">
            <Button
              label={"Shop now"}
              imgSrc={arrowRight}
              hover={`hover:bg-black`}
            />

            <Button label={"Learn more"} hover={`hover:bg-slate-100`} background={`bg-white`} textColor={`text-gray-500`} border={`border-slate-gray`}/>
          </section>
        </section>
      </section>
    </div>
  );
};

export default SpecialOffer;
